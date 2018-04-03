const isArray = require('../../util/isArray/index');

const concat = function (rootList, targetList) {
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