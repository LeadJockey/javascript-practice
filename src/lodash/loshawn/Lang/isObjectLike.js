/**
 * value 가 오브젝트 형인지 체크한다. null 이 아니고, typeof 가 "object" 인지 확인한다.
 * @param value
 * @returns {boolean}
 */
const isObjectLike = function(value){
  return (value !== null) && (typeof value === 'object');
};

module.exports = isObjectLike;


