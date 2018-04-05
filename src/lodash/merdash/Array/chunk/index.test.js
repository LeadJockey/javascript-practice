const chunk = require('./index');

const argument = [
  {
    given: [['a', 'b', 'c', 'd'], 2],
    expected: [['a', 'b'], ['c', 'd']]
  }
]



describe("my Chunk method", () => {

  test("첫뻔재 인자 타입이 Array가 아닐시 에러를 뱉는다.", () => {
    expect(chunk.bind(null, false)).toThrow(TypeError);
  })

  test("두번째 인자 Number가 들어오지 않으면 TypeError를 뱉는다.", () => {
    expect(chunk.bind(null, ['a'], false)).toThrow(TypeError);
    expect(chunk.bind(null, ['a'], "1")).toThrow(TypeError);
  });

  test("size 인자가 설정이 안되어 있을시 배열 그대로를 리턴한다.", () => {
    const soloArgs = [
      [['a', 'b']],
      [[3, 1]],
      [[true, false]]
    ];

    soloArgs.forEach(arg => {
      expect(chunk.apply(null, arg)).toEqual(arg[0]);
    });

  });


  argument.forEach((testCase) => {
    const name = `정상동작시 given: ${JSON.stringify(testCase.given)} , expected: ${JSON.stringify(testCase.expected)}`
    test(name, () => {
      expect(chunk.apply(null, testCase.given)).toEqual(testCase.expected);
    });
  })


});