const isObjectLike = require('./isObjectLike');

const testList = [
  {
    func:isObjectLike({}),
    given:'{}',
    expected:true,
    method:'toBe',
  },
  {
    func:isObjectLike([1,2,3]),
    given:'[1,2,3]',
    expected:true,
    method:'toBe',
  },
  {
    func:isObjectLike(null),
    given:'null',
    expected:false,
    method:'toBe',
  },
];

describe('loshawn isObjectLike method test', () =>{

  testList.forEach((testcase) =>{
    //명제 하나
    test(`given ${JSON.stringify(testcase.given)} => expected ${JSON.stringify(testcase.expected)}`, () =>{
      //기대값과 결과값
      expect(testcase.func)[testcase.method](testcase.expected);
    });
  });

});