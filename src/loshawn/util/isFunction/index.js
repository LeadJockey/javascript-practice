const isFunction = function(func){
	return !!(func && func.call && func.apply);
};

module.exports = isFunction;