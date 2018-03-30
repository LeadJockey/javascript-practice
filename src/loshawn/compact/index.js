const compact = function (list) {
	const result = [];
	const length = list.length;
	let i        = 0;
	
	for (i; i < length; i++) {
		if (list[i]) {
			result.push(list[i]);
		}
	}
	
	return result;
};

module.exports = compact;