const concat = require('./concat');
const _ = require('lodash');

describe('loshawn concat method test', () =>{

  test(`given concat([1], [2, [3], [[4]]]) => expected ${_.concat([1], 2, [3], [[4]])}`, () =>{
    expect(concat([1], 2, [3], [[4]]))
    .toEqual(_.concat([1], 2, [3], [[4]]));
  });

  test(`given compact([1], [2, [[3, 4, 6], 6, 7], [[4]]]) => expected ${_.concat([1], 2, [[3, 4, 6], 6, 7], [[4]])}`, () =>{
    expect(concat([1], 2, [[3, 4, 6], 6, 7], [[4]]))
    .toEqual(_.concat([1], 2, [[3, 4, 6], 6, 7], [[4]]));
  });

});