const isObject = function(value){
  return !!(value && typeof value === 'object' && value.constructor === Object);
};

module.exports = isObject;