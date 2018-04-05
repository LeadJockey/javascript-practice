const isArray = require("../../isArray")

function concat() {
  var result = [];
  var arrArgs = Array.prototype.slice.call(arguments)  // copy


  while (arrArgs.length > 0) {
    var value = arrArgs.shift();

    if (isArray(value)) {
      while (value.length > 0) {
        result.push(value.shift());
      }
    } else {
      result.push(value);
    }


  }


  return result;

}

module.exports = concat;