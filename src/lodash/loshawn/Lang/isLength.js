/**
 * value 의 길이가 정해져있고 배열 형태인지 체크
 *
 * @param value
 * @returns {boolean}
 */
const isLength = function(value){
  return typeof value === 'number'
    && value > -1
    && value % 1 === 0
    && value <= Number.MAX_SAFE_INTEGER;
};

module.exports = isLength;