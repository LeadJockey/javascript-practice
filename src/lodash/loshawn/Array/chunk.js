const isInteger = require('./../Lang/isInteger');
const isArray = require('./../Lang/isArray');
const _ = require('lodash');
_.chunk()


const chunk = function(list, chunkSize){
  //배열 타입 체크
  if(!isArray(list) || (list.length < 1)){
    throw new TypeError(`${list} 1개 이상의 아이탬을 가지고 있는 배열이여야 합니다.`)
  }
  //양의 정수 체크
  if((!isInteger(chunkSize)) || (chunkSize < 1)){
    throw new TypeError(`${chunkSize} 양의 정수여야 합니다.`)
  }

  const length = list === null ? 0:list.length;
  let result = [];
  let tmp = [];
  let index = 0;

  while(index < length){
    tmp.push(list[index++]);
    if(tmp.length === chunkSize){
      result.push(tmp);
      tmp = [];
    }
  }
  if(tmp.length > 0) {result.push(tmp);}

  return result;
};

module.exports = chunk;