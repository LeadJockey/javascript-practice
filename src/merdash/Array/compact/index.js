// falsy value : false, null , 0 , "" , undefined , NaN...
const isArray = require("../../isArray")

function isFalsy(value) {
  if (!!value) {
    return false;
  }
  return true;
}

function compact(collection) {
  var result = [];

  if (!isArray(collection) && collection !== undefined) {
    throw new TypeError("인자는 배열이 들어와야 합니다.");
  }

  if (collection === undefined) {
    return result;
  }

  var tempCollection = collection.slice();

  while (tempCollection.length > 0) {
    var value = tempCollection.shift();

    if (!isFalsy(value)) {
      result.push(value);
    }
  }

  return result;
}

module.exports = compact;