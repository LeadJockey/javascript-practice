const isArray = require('../Lang/isArray');

const compact = function(list){
	
	if(!isArray(list) || (list.length < 1)){
		throw new TypeError(`compact 의 첫번째 인자는 배열이어야 합니다`);
	}
	
	const result = [];
	const length = list.length;
	let i = 0;
	
	for(i; i < length; i++){
		if(list[i]){
			result.push(list[i]);
		}
	}
	
	return result;
};


module.exports = compact;