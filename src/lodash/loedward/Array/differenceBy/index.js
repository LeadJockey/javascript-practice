
const isObject = (obj) => obj === Object(obj);
//		const isFunction = (func) => typeof func === 'function';
const isFunction = (func) => !!(func && func.constructor && func.call && func.apply);

const differenceBy = (root, target, type)=>{
  let rootArr = root.slice(0);

//      console.log(typeof type === 'function');


  if(isFunction(type)){
    target.forEach(function(targetItem){
      const mathNum = type(targetItem);
      let newArr = [];
      rootArr.forEach(function(rootItem){
        const mathRoot = type(rootItem);
        if(mathNum !== mathRoot){
          return newArr.push(mathRoot);
        }
      });
      return rootArr = newArr;
    });
    return rootArr;
  }else{

    target.forEach(function(targetItem){
      let newArr = [];
//          console.log('targetItem',targetItem);
      for(let i in targetItem){
        if(type === i){

          rootArr.forEach(function(rootItem){

            for(let j in rootItem){
              if(type === j){
                if(targetItem[i] !== rootItem[j]){
                  let obj = {};
//                      console.log('rootItem ad a',rootItem[j]);
                  obj[type] = rootItem[j];
                  return newArr.push(obj);
                }
              }
            }
          });
        }
      }
//					console.log('newArr',newArr);
      return rootArr = newArr;
    });
    return rootArr;
  }
};

module.exports = differenceBy;