// const tester = require('./../../test');
// const differenceWith = require('./index');
// const isEqual = require('./../../util/isEqual');
// const testList = [
//   {
//     given:'[{\'x\':1},{\'x\':2}], [{\'x\':1}],isEqual',
//     logic:differenceWith.apply(null, [ [{'x':1},{'x':2}], [{'x':1}],_.isEqual ]),
//     expected:[{'x':2}],
//     method:'toEqual',
//   },
//   // {
//   // 	given:difference.bind(null, undefined),
//   // 	expected:TypeError,
//   // 	method:'toThrow',
//   // },
//   // {
//   // 	given:difference.bind(null, null),
//   // 	expected:TypeError,
//   // 	method:'toThrow',
//   // },
//   // {
//   // 	given:difference.bind(null, -1),
//   // 	expected:TypeError,
//   // 	method:'toThrow',
//   // },
//   // {
//   // 	given:difference.bind(null, '1'),
//   // 	expected:TypeError,
//   // 	method:'toThrow',
//   // },
// ];
// //
// // describe('my differenceWith method test', () =>{
// //   tester(testList);
// // });