const isLength = require('./isLength');
const isFunction = require('./isFunction');
/**
 * value 가 배열형인지 확인합니다 ( 함수는 아니고 랭스는 존재, null 이 아닌경우는 배열형태의 것으로 간주)
 *
 * @param value
 * @returns {boolean|*}
 */
const isArrayLike = function(value){
  return value != null && isLength(value.length) && !isFunction(value);
};

module.exports = isArrayLike;