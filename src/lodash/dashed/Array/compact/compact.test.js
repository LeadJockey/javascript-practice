const compact = require('./compact');

const testList = [
  {
    given: [0, 1, false, 2, '', 3],
    expected: [1, 2, 3],
    method: 'toEqual',
  },
  {
    given: [0, 0, null, 2, '', 3],
    expected: [2, 3],
    method: 'toEqual',
  },
  {
    given: [0, 0, null, undefined, '', 3],
    expected: [3],
    method: 'toEqual',
  },
];
testList.forEach((item) => {
  const given = item.given;
  const expected = item.expected;
  const method = item.method;
  
  test('잘돌아 갈껄?', () => {
    expect(compact(given))[method](expected);
  });
});