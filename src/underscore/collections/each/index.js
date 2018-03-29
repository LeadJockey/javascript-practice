Underscore.prototype.each = function (list, callback) {
	var result = [];
	var length = list.length;
	var i      = 0;
	for (i; i < length; i++) {
		result.push(callback(list[i], i));
	}
	return result;
};