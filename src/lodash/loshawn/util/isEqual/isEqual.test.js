const isEqual = require('./index');

test("{'x':1},{'x':1}-> true", () =>{
  expect(isEqual({ 'x':1 }, { 'x':1 })).toBe(true);
});

test("{ 'x':1,'y':2 }, { 'x':1,'y':2 }-> true", () =>{
  expect(isEqual({ 'x':1,'y':2 }, { 'x':1,'y':2 })).toBe(true);
});

test("{ 'x':2,'y':1 }, { 'x':1,'y':1 }-> false", () =>{
  expect(isEqual({ 'x':2,'y':1 }, { 'x':1,'y':1 })).toBe(false);
});

test("{ 'x':[1,2]}, { 'x':[1,2] }-> true", () =>{
  expect(isEqual({ 'x':[1,2]}, { 'x':[1,2] })).toBe(false);
});
