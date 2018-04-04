const isArray = require('./../../util/isArray/index');
const message = require('./../../test/message');

const concat = function (rootList, targetList) {
	
	if(!isArray(rootList)){
		throw new TypeError(`compact 의 첫번째 인자는 ${message.mustTypeArray}`);
	}
	
	if(!isArray(targetList)){
		throw new TypeError(`compact 의 두번째 인자는 ${message.mustTypeArray}`);
	}
	
	const result = [];
	const length = targetList.length;
	
	for (let k = 0; k < rootList.length; k++) {
		result.push(rootList[k]);
	}
	
	for (let i = 0; i < length; i++) {
		const elem = targetList[i];
		if (isArray(elem)) {
			const elemLength = elem.length;
			for (let j = 0; j < elemLength; j++) {
				result.push(elem[j]);
			}
		} else {
			if (elem) {
				result.push(elem);
			}
		}
	}
	return result;
};

module.exports = concat;