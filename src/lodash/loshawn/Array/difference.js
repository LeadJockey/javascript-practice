const isArray = require('../Lang/isArray');
const concat = require('./concat');

const _getOnlyArrayList = function(list){
  const result = [];
  const length = list.length;
  let idx = 0;
  while(idx < length){
    const item = list[idx++];
    if(isArray(item)){
      result.push(item);
    }
  }
  return result;
};

/**
 * 차집합을 구하는 함수
 * 작동하기 위해서는 최소한 두개의 배열 형태의 인자가 필요하다.
 * 첫번째 인자를 베이스라고 지칭한다
 * 두번째 인자부터는 컴페어 라고 자칭한다.
 * 컴페어 인자가 배열형태가 아니라면 무시한다.
 * 첫번째 인자에서 중복되는 값들은 무시하고 유니크한 값들만 뽑아서 리턴한다.
 *
 * @returns {Array}
 */
const difference = function(){

  const copyList = Array.prototype.slice.call(arguments);

  if(copyList.length < 2){
    throw new TypeError(`입력되어야 할 파라미터가 부족합니다.`);
  }

  const baseList = copyList.slice(0, 1)[0];
  // console.log(baseList);
  const compareList = copyList.slice(1);

  if(!isArray(baseList)){
    throw new TypeError(` 파라미터의 형태는 배열이어야 합니다.`);
  }

  const onlyArrCompareList = _getOnlyArrayList(compareList);
  // console.log(onlyArrCompareList);

  const oacLeng= onlyArrCompareList.length;
  let t = 0;
  let mergeCompareList = [];

  while(t < oacLeng){
    mergeCompareList = concat(mergeCompareList,onlyArrCompareList[t++]);
    // console.log(`mergetCompareList : ${mergeCompareList}`);
  }

  for(let i=0; i < baseList.length; i++){

    for(let j = 0; j < mergeCompareList.length; j++){
      if(baseList[i] === mergeCompareList[j]){
        console.log(`deleted : ${baseList[i]}`);
        baseList.splice(i,1);
      }
    }
  }

  return baseList
};

module.exports = difference;