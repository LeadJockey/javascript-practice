const difference = require('./index');

const testList = [
  {
    given:[2, 3],
    target:[1, 2],
    expected:[3],
    method:'toEqual'
  },
  {
    given:[1, 5, 7],
    target:[1, 6, 8],
    expected:[5, 7],
    method:'toEqual'
  }
];

testList.forEach((item)=>{
  const given = item.given;
  const target = item.target;
  const expected = item.expected;
  const method = item.method;
  const desc = `${given} , ${target} > ${expected}`;
  test(desc, () => {
    expect(difference(given, target))[method](expected);
  });
});




