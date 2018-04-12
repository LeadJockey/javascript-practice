const isArray = require('../../util/isArray');
const isInteger = require('../../util/isInteger');

const compact = (arg) => {
  if (!isArray(arg)) {
    throw new TypeError('arg is not array');
  }
  let temp = [];
  arg.forEach(element => {
    isInteger(element) && element > 0 ? temp.push(element) : '';
  });
  return temp;
};

module.exports = compact; 