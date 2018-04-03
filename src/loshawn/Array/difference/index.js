const isArray = require('./../../util/isArray/index');
const message = require('./../../test/message');

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
	
	if(!isArray(rootList)){
		throw new TypeError(`compact 의 첫번째 인자는 ${message.mustTypeArray}`);
	}
	
	if(!isArray(targetList)){
		throw new TypeError(`compact 의 두번째 인자는 ${message.mustTypeArray}`);
	}
	
	let result = rootList.slice(0);
	
	for(let target of targetList){
		result = _findDiffer(result, target);
	}
	return result;
};

module.exports = difference;