
const dropRight = function(arr,num){
  let dropArr;
  if(num === undefined){
    dropArr = arr.splice(0,arr.length-1);
  }else{
    dropArr = arr.splice(0,arr.length - num);
  }
  return dropArr;
};

module.exports = dropRight;