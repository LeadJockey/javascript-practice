const chunk = (arr,chunkNum)=>{
  const chunkArr = [];
  let i;
  for(i = 0; i < arr.length; i += chunkNum){
    chunkArr.push(arr.slice(i,i + chunkNum));
  }
  return chunkArr;
};



// console.log(chunk([1,2,3,4],5));

module.exports = chunk;