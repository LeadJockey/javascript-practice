const isArray = require("../../isArray")


function difference() {

  var result = [];
  var arrArgs = Array.prototype.slice.call(arguments)  // copy
  var baseArray = arrArgs[0];

  if (!isArray(baseArray)) {
    return result;
  }






  return result;

}


module.exports = difference;