const concat = require('./concat');
const _ = require('lodash');

describe('loshawn concat method test', () =>{

  test(`given concat([1,2,3],[4,5],[6,7]) => expected ${_.concat([1,2,3],[4,5],[6,7])}`, () =>{
    expect(concat([1,2,3],[4,5],[6,7]))
    .toEqual(_.concat([1,2,3],[4,5],[6,7]));
  });

  test(`given concat([1,2,3],[4,5],[6,7]) => expected [1,2,3,4,5,6,7]`, () =>{
    expect(concat([1,2,3],[4,5],[6,7]))
    .toEqual([1,2,3,4,5,6,7]);
  });

});