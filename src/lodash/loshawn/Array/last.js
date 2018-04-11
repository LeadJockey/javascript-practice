/**
 * 배열의 마지막 요소 반환
 *
 * @param array
 * @returns {*}
 */
const last = function(array){
  const length = array === null ? 0:array.length;
  return length ? array[array.length - 1]:undefined;
};

module.exports = last;