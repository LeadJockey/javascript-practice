const isArray = require('../../util');
const isInteger = require('../../util');

const chunk = (arg, size) => {
  if (isArray(arg) === true && isInteger(size) === true) {
    let arr = [];
    const arrLength = arg.length;
    const count = arrLength / size;
    for (let i = 0; i < count; i++) {
      arr.push(arg.splice(0, size));
    }
    return arr;
  } else {
    return;
  }
};

module.exports = chunk;