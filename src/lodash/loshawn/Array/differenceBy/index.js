const isArray = require('./../../util/isArray/index');
const message = require('./../../test/message');

const _findDifferBy = function(list, target, criterion){
	const result = [];
	for(let item of list){
		if(criterion(target) !== criterion(item)){
			result.push(item);
		}
	}
	return result;
};

const difference = function(rootList, targetList, criterion){
	
	if(!isArray(rootList)){
		throw new TypeError(`difference 의 첫번째 인자는 ${message.mustTypeArray}`);
	}
	
	if(!isArray(targetList)){
		throw new TypeError(`difference 의 두번째 인자는 ${message.mustTypeArray}`);
	}
	
	let result = rootList.slice(0);
	
	for(let target of targetList){
		result = _findDifferBy(result, target, criterion);
	}
	return result;
};

module.exports = difference;