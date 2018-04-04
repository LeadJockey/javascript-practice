const isArray = require('./../../util/isArray');
const message = require('./../../test/message');


const compact = function(list){
	
	if(!isArray(list)){
		throw new TypeError(`compact 의 첫번째 인자는 ${message.mustTypeArray}`);
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