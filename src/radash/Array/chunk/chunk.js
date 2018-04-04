
function chunk(arr, sliceNum) {
  const result = [];
  
  for(let i=0;i <= arr.length;i+=1 ){
    if( i%sliceNum === 0 ){
      const num = i <= sliceNum ? i+sliceNum : arr.length;
      const aa = arr.slice(i,num);
      result.push(aa);
    }
  }
  return result;
}
module.exports = chunk;
