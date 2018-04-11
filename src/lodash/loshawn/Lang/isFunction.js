/**
 * func 로 들어온 값이 함수인지 체크
 * @param func
 * @returns {boolean}
 */
const isFunction = function(func){
  return !!(func && func.call && func.apply);
};

module.exports = isFunction;