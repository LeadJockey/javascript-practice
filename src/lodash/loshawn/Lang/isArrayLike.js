/**
 * value 가 배열형식인지 체크한다.
 *
 */
const _ = require('lodash');
_.isArrayLike()
const isArrayLike = function(value){
  return value != null && isLength(value.length) && !isFunction(value);
};

module.exports = isArrayLike;