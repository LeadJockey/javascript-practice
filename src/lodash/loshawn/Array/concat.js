const isArray = require('../Lang/isArray');

const concat = function(){

  const result = [];
  const copyList = Array.prototype.slice.call(arguments);
  const length = copyList.length;
  let index = 0;

  while(index < length){

    const value = copyList[index++];
    let innerIndex = 0;

    if(isArray(value)){
      while(innerIndex < value.length){
        result.push(value[innerIndex++]);
      }
    }else{
      result.push(value);
    }
  }

  return result;
};

module.exports = concat;