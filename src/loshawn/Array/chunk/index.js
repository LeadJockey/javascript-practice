const chunk = function (list, count) {
	const result = [];
	const length = list.length;
	let i        = 0;
	let tmp      = [];
	
	for (i; i < length; i++) {
		if ((i + 1) % count === 0 && i !== 0) {
			tmp.push(list[i]);
			result.push(tmp);
			tmp = [];
		} else {
			tmp.push(list[i]);
		}
	}
	
	return result;
};

module.exports = chunk;