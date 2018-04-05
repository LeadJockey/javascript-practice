const chunk = require('./chunk');

const result = {
  arr : [0,1,2,3,4],
  sliceNum : 2,
  arrResult : [[0,1],[2,3],[4]]
}

describe('chunk' , () => {
  test('배열이 들어오고 n만큼 자르면 나뉜다', () => {
    expect( chunk( result.arr , result.sliceNum ) ).toEqual( result.arrResult );
  });
});