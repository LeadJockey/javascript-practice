const isInteger = require('./../Lang/isInteger');
const _ = require('lodash');

const chunk = function(list, chunkSize){
    console.log(list.isArray);
    console.log(list.length);
  //배열 타입 체크
  if(!list.isArray || (list.length < 1)){
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

  for(index; index < length; index++){
    if((index + 1) % chunkSize === 0){
      tmp.push(list[index]);
      result.push(tmp);
      tmp = [];
    }else{
      tmp.push(list[index]);
    }
  }

  result = tmp.length > 0 ? result.push(tmp):result;

  return result;
};

module.exports = chunk;