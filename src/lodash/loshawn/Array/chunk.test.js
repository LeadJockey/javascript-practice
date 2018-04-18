const chunk = require('./chunk');
const _ = require('lodash');

describe('loshawn chunk method test', () =>{

  test(`given chunk([1 ... 10], 4) => expected [1,2,3,4],[5,6,7,8],[9,10]`, () =>{
    expect(chunk([1, 2, 3, 4, 5], 2))
    .toEqual(_.chunk([1, 2, 3, 4, 5], 2));
  });

  test(`given chunk.bind(null,'1234',2) => expected TypeError`, () =>{
    expect(chunk.bind(null, '1234', 2)).toThrow(TypeError);
  });

  test(`given chunk.bind(null,[1,2,3],'2') => expected TypeError`, () =>{
    expect(chunk.bind(null, [1, 2, 3], '2')).toThrow(TypeError);
  });

  test(`given chunk.bind(nsull,'1234',2) => expected TypeError`, () =>{
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual(_.chunk([1, 2, 3, 4, 5], 2));
  });

});