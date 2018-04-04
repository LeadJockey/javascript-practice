const isArray = require('./../../util/isArray');
const isInteger = require('./../../util/isInteger');
const message = require('./../../test/message');

const chunk = function(list, count){
	
	if(!isArray(list)){
		throw new TypeError(`chunk 의 첫번째 인자는 ${message.mustTypeArray}`);
	}
	
	if(!isInteger(count)){
		throw new TypeError(`chunk 의 두번쨰 인자는 ${message.mustTypeNumber}`);
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

module.exports = chunk;