//utils
Lodash.prototype.isArray = function (item) {
	return Object.prototype.toString.call(item) === '[object Array]';
};

//methods
Lodash.prototype.chuck   = function (list, count) {
	var result = [];
	var tmp    = [];
	var i      = 0;
	var length = list.length;
	
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
Lodash.prototype.compact = function (list) {
	var result = [];
	var i      = 0;
	var length = list.length;
	for (i; i < length; i++) {
		if (list[i]) {
			result.push(list[i]);
		}
	}
	return result;
};
Lodash.prototype.concat  = function (rootList, targetList) {
	var result = [];
	var length = targetList.length;
	
	for (var k = 0; k < rootList.length; k++) {
		result.push(rootList[k]);
	}
	
	for (var i = 0; i < length; i++) {
		var elem = targetList[i];
		if (this.isArray(elem)) {
			var elemLength = elem.length;
			for (var j = 0; j < elemLength; j++) {
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

