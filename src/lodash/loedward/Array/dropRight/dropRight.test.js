const difference = require('./index');

const testList = [
  {
    given:[1,2,3,4,5],
    num:2,
    expected:[1,2,3],
    method:'toEqual'
  },
  {
    given:[1,2,3,4,5],
    num:3,
    expected:[1,2],
    method:'toEqual'
  },
  {
    given:[1,2,3,4,5],
    num:7,
    expected:[],
    method:'toEqual'
  },
  {
    given:[1,2,3,4,5],
    expected:[1,2,3,4],
    method:'toEqual'
  }
];

testList.forEach((item)=>{
  const given = item.given;
  const num = item.num;
  const expected = item.expected;
  const method = item.method;
  const desc = `${given} , ${num} > ${expected}`;
  test(desc, () => {
    expect(difference(given, num))[method](expected);
  });
});

