const compact = require('./compact');
const _ = require('lodash');

describe('loshawn compact method test', () =>{

  test(`given compact([0, 1, false, 2, '', 3]) => expected ${_.compact([0, 1, false, 2, '', 3])}`, () =>{
    expect(compact([0, 1, false, 2, '', 3]))
    .toEqual(_.compact([0, 1, false, 2, '', 3]));
  });

  test(`given compact.bind(null, false) => expected TypeError`, () =>{
    expect(compact.bind(null, false)).toThrow(TypeError);
  });

  test(`given compact.bind(null, undefined) => expected TypeError`, () =>{
    expect(compact.bind(null, undefined)).toThrow(TypeError);
  });

  test(`given compact.bind(null, null) => expected TypeError`, () =>{
    expect(compact.bind(null, null)).toThrow(TypeError);
  });

  test(`given compact.bind(null,  -1) => expected TypeError`, () =>{
    expect(compact.bind(null, -1)).toThrow(TypeError);
  });

  test(`given compact.bind(null, '1') => expected TypeError`, () =>{
    expect(compact.bind(null, '1')).toThrow(TypeError);
  });

});