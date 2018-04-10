const isObject = function(value){
  return (value && typeof value === 'object'
                && value.constructor === Object) ? true : false;
};

module.exports = isObject;