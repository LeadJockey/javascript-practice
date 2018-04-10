const isObject = require('./../isObject');

/*
* 인자 두개를 받아서 같은지 비교해 주는 함수 ( 인자는 반드시 오브젝트 형태 여야 한다
* */
const isEqual = function(target, compare){

  if(!(isObject && isObject(compare))){
    return false;
  }

  let count = 0;
  for(let prop in compare){
    if(compare.hasOwnProperty(prop)){
      if(target[prop] === compare[prop]){
        count ++;
      }
    }
  }
  console.log(Object.keys(target).length);
  console.log(count);

  return Object.keys(target).length === count;
};

module.exports = isEqual;