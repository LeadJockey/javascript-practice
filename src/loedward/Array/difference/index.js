const difference = (root, target)=>{
  const newArr = [];

  let i;
  let j;
  for(i = 0; i < root.length; i+=1){
    let differenceArr = [];
    for(j = 0; j < target.length; j+=1){
      if(root[i] !== target[j]){
        differenceArr.push(1);
        if(differenceArr.length === root.length){
          newArr.push(root[i]);
        }

      }
    }
  }
  return newArr;
};

module.exports = difference;