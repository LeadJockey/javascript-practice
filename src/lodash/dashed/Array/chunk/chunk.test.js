const chunk = require('./chunk');

const result = {
  arg: [0, 1, 2, 3, 4],
  size: 2,
  arrResult: [[0, 1], [2, 3], [4]]
};

describe('chunk', () => {
  test('배열이 들어오고 n만큼 자르면 나뉜다', () => {
    expect(chunk(result.arg, result.size)).toEqual(result.arrResult);
  });
});


