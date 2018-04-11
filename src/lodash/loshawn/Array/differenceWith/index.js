const isArray = require('./../../util/isArray');
const isFunction = require('./../../util/isFunction');
const message = require('./../../test/message');
const _ =require('lodash');
// _.differenceWith
// _.isArrayLikeObject
// _.isArryLikey


const differenceWith = baseRest(function(array, values) {
  let comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(arsray, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : [];
});

module.exports = differenceWith;