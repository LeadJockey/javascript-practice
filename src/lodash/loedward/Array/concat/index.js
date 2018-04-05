const concat = (firstArr,nextArr,num)=>{
  function concatArr(firstArr,nextArr,num){
    const newArr = [];
    const argumentArr = Array.prototype.slice.call(arguments,null);
//				const arrLength = argumentArr.length;
//			  let i;
//			  let j;
//			  let k;
//				for(i = 0; i < arrLength; i+=1){
//				  if(Array.isArray(argumentArr[i])){
//            for(j = 0; j < argumentArr[i].length; j+=1){
//              if(Array.isArray(argumentArr[i][j])){
//                for(k = 0; k < argumentArr[i][j].length; k+=1){
//                  newArr.push(argumentArr[i][j][k]);
//                }
//              }else{
//                newArr.push(argumentArr[i][j]);
//              }
//            }
//					}else{
//            newArr.push(argumentArr[i]);
//          }
//				}

    argumentArr.forEach((item) => {
      if(Array.isArray(item)){
        item.forEach((list) => {
          if(Array.isArray(list)){
            list.forEach((arrList) => {
              newArr.push(arrList);
            });
          }else{
            newArr.push(list);
          }
        });
      }else{
        newArr.push(item);
      }
    });

    return newArr;
  }
  return concatArr(firstArr,nextArr,num);

};

module.exports = concat;