const isArray = require('../../util/isArray');
const isInteger = require('../../util/isInteger');

const chunk = (arg, size) => {
	if(!isArray(arg)){
		throw new TypeError('first arg is not array');
	}
	
	if(!isInteger(size)){
		throw new TypeError('second arg is not number');
  }
  
  let arr = [];
  const arrLength = arg.length;
  const count = arrLength / size;
  for (let i = 0; i < count; i++) {
    arr.push(arg.splice(0, size));
  }
  return arr;
};

module.exports = chunk;