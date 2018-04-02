const chunk = require('./index');

const test = [
  {
    given: [['a', 'b', 'c', 'd'], 2],
    expected: [['a', 'b'], ['c', 'd']]
  }
]

describe("my Chunk method", () => {
  test.forEach((testCase) => {
    const name = `given: ${JSON.stringify(testCase.given)} , expected: ${JSON.stringify(testCase.expected)}`
    test(name, () => {
      expect(chunk(testCase.given)).toEqual(testCase.expected);
    });
  })


});