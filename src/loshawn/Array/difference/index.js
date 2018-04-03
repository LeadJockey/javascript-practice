const _findDiffer = function (list,target) {
	const result = [];
	for(let item of list){
		if(target !== item){
			result.push(item);
		}
	}
	return result;
};


const difference = function (rootList, targetList) {
	let result = rootList.map((e)=>e);
	
	for(let target of targetList){
		result = _findDiffer(result, target);
	}
	return result;  
};

module.exports = difference;