const isArray = require('./../../util/isArray');
const isFunction = require('./../../util/isFunction');
const message = require('./../../test/message');
const _ =require('lodash');

const _findDifferByFunction = function(list, target, criterion){
  const result = [];
  for(let item of list){
    if(criterion(item,target)){
      result.push(item);
    }
  }
  return result;
};

const differenceWith = function(rootList, targetList, criterion){

  if(!isArray(rootList)){
    throw new TypeError(`difference 의 첫번째 인자는 ${message.mustTypeArray}`);
  }

  if(!isArray(targetList)){
    throw new TypeError(`difference 의 두번째 인자는 ${message.mustTypeArray}`);
  }

  let result = rootList.slice(0);

  for(let target of targetList){
    if(isFunction(criterion)){
      result = _findDifferByFunction(result, target, criterion);
    }
  }
  return result;
};

module.exports = differenceWith;