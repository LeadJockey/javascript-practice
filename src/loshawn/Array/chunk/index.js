const isArray = require('../../util/isArray');
const isInteger = require('../../util/isInteger');

const chunk = function(list, count){
	
	if(!isArray(list)){
		throw new TypeError(chunk.message.mustTypeArray);
	}
	
	if(!isInteger(count)){
		throw new TypeError(chunk.message.mustTypeNumber);
	}
	
	if(count >= list.length){
		return [list.slice(0)];
	}
	
	const result = [];
	const length = list.length;
	let i = 0;
	let tmp = [];
	
	for(i; i < length; i++){
		if((i + 1) % count === 0 && count !== 0){
			tmp.push(list[i]);
			result.push(tmp);
			tmp = [];
		}else{
			tmp.push(list[i]);
		}
	}
	
	return result;
};

chunk.message = {
	mustTypeArray:'chunk 의 첫번째 인자는 Array(배열) 이어야 합니다.',
	mustTypeNumber:'chunk 의 두번째 인자는 Integer(정수) 이어야 합니다.',
};

module.exports = chunk;