const chunk = require('./index');

const testList = [
  {
    given:[1,2,3,4],
    expected:[[1],[2],[3],[4]],
    method:'toEqual',
    chunkNum:1
  },
  {
    given:[1,2,3,4],
    expected:[[1,2],[3,4]],
    method:'toEqual',
    chunkNum:2
  },
  {
    given:[1,2,3,4],
    expected:[[1,2,3],[4]],
    method:'toEqual',
    chunkNum:3
  },
  {
    given:[1,2,3,4],
    expected:[[1,2,3,4]],
    method:'toEqual',
    chunkNum:4
  },
  {
    given:[1,2,3,4],
    expected:[[1,2,3,4]],
    method:'toEqual',
    chunkNum:5
  },
];

testList.forEach((item)=>{
  const given = item.given;
  const expected = item.expected;
  const method = item.method;
  const chunkNum = item.chunkNum;
  const desc = `${given} > ${expected}`;
  test(desc, () => {
    expect(chunk(given, chunkNum))[method](expected);
  });
});




