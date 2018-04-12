
const drop = function(arr,num){
  let dropArr;
  if(num === undefined){
    dropArr = arr.splice(1,arr.length);
  }else{
    dropArr = arr.splice(num,arr.length);
  }
  return dropArr;
};

module.exports = drop;