const isArray = require("../../isArray");
const concat = require("../concat");

// 인자중에 배열만 골라내서 하나의 새로운 배열에 담아서 리턴
function filterArray() {
  var result = [];
  var arrArgs = Array.prototype.slice.call(arguments)
  var length = arrArgs.length;

  var i = 0;

  for (i; i < length; i++) {
    if (isArray(arrArgs[i])) {
      result.push(arrArgs[i]);
    }
  }
  return result;
}

function arrayItemRemoveByValue(array, value) {
  var result = array.slice();

  var length = result.length;
  var i = 0;
  for (i; i < length; i++) {
    if (array[i] === value) {
      result.splice(i, 1);
    }
  }

  return result;
}

function isValueExistInArray(array, value) {

  var length = array.length;
  var i = 0;
  for (i; i < length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}

/**
 * 
 * @since 0.1.0
 * @autor merlin.ho
 * @category Array
 * @param 
 * @return Array
 * @see (참고사항)
 * @example
 * 
 */

function difference() {
  var result = [];
  var arrArgs = Array.prototype.slice.call(arguments)  // copy
  var baseArray = result = arrArgs.shift();
  var compareArrays = filterArray.apply(null, arrArgs); //[[2, 3], [3, 4]]

  if (!isArray(baseArray)) {
    return [];
  }

  if (compareArrays.length < 1) {
    return baseArray;
  }

  var baseLength = baseArray.length;
  var compareLength = compareArrays.length;

  var i = 0;


  for (i; i < baseLength; i++) {
    var baseValue = baseArray[i];
    var j = 0;
    for (j; j < compareLength; j++) {
      if (isValueExistInArray(compareArrays[j], baseValue)) {
        result = arrayItemRemoveByValue(result, baseValue);
        break;
      }
    }
  }

  return result;
}


module.exports = {
  difference: difference,
  isValueExistInArray: isValueExistInArray,
  arrayItemRemoveByValue: arrayItemRemoveByValue,
  filterArray: filterArray
}

