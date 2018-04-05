const compact = require('./index');

const testList = [
  {
    given:[0, 1, false, 2, '', 3],
    expected:[1, 2, 3],
    method:'toEqual'
  },
  {
    given:[false, 1, '' , 2, '', 3],
    expected:[1, 2, 3],
    method:'toEqual'
  }
];

testList.forEach((item)=>{
  const given = item.given;
  const expected = item.expected;
  const method = item.method;
  const desc = `${given} > ${expected}`;
  test(desc, () => {
    expect(compact(given))[method](expected);
  });
});




