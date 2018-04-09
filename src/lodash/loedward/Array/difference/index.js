const difference = (root, target)=>{
  let rootArr = root.slice(0);

  target.forEach(function(targetItem){
    let newArr = [];
    rootArr.forEach(function(rootItem){
      if(targetItem !== rootItem){
        return newArr.push(rootItem);
      }
    });
    return rootArr = newArr;
  });

  return rootArr;
};

module.exports = difference;