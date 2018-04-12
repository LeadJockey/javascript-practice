const difference = require('./index');

const testList = [
  {
    given:[2.3,4.6,5.7,7.2,8.3],
    target:[2.1,7.3,6.5,9.6],
    eq: Math.round,
    expected:[5,6,8],
    method:'toEqual'
  },
  {
    given:[{'x':1,'y':1},{'x':2},{'x':7,'y':3}],
    target:[{'x':1,'y':3},{'x':5,'y':5}],
    eq: 'x',
    expected:[{'x':2},{'x':7}],
    method:'toEqual'
  }
];

testList.forEach((item)=>{
  const given = item.given;
  const target = item.target;
  const eq = item.eq;
  const expected = item.expected;
  const method = item.method;
  const desc = `${given} , ${target} > ${expected}`;
  test(desc, () => {
    expect(difference(given, target, eq))[method](expected);
  });
});

