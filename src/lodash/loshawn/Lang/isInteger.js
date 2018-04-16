/**
 * 숫자형태인지 판별해주는 함수
 *
 * @param value
 * @returns {boolean}
 */
const isInteger = function(value){
  return typeof value === 'number';
};

module.exports = isInteger;