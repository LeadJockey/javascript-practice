const compact = (arr)=>{
  const newArr = [];
  let i;
  for(i = 0;i < arr.length; i+=1){
    if(!arr[i] === false){
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = compact;