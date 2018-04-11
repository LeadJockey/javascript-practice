const isArrayLike = require('./isArrayLike');
const isObjectLike = require('./isObjectLike');

/**
 * 배열형이면서 객체형을 가지고 있다면 true
 *
 * @param value
 * @returns {*|boolean}
 */
const isArrayLikeObject = function(value){
  return isArrayLike(value) && isObjectLike(value);
};

module.exports = isArrayLikeObject;