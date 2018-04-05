const concat = require('./index');

const testList = [
  {
    given:[0, 2, [3, 4, 5], [[6, 7]]],
    given2:['a','b','c',[10,20],[[30,40]]],
    given3:100,
    expected:[0, 2, 3, 4, 5,[6, 7],'a','b','c', 10, 20, [30, 40],100],
    method:'toEqual'
  }
];

testList.forEach((item)=>{
  const given = item.given;
  const given2 = item.given2;
  const given3 = item.given3;
  const expected = item.expected;
  const method = item.method;
  const desc = `${given}, ${given2} > ${expected}`;
  test(desc, () => {
    expect(concat(given, given2, given3))[method](expected);
  });
});




