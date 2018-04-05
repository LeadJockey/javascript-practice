const isArray = require("../../isArray")


function chunk(collection) {

  var size = Array.prototype.slice.call(arguments, 1, 2)[0];
  var result = [];

  if (!isArray(collection)) {
    throw new TypeError(chunk.message.mustTypeCollection);
  }

  if ((typeof size !== "number") && (size !== undefined)) {
    throw new TypeError(chunk.message.mustTypeNumber + typeof size + "입니다.");
  }

  if ((size === 0) || (size === undefined)) {
    return collection;
  }

  // ['a' , 'b' , 'c'] ,2  => ['a','b'],['c']
  // result.push(element)
  var tempCollection = collection.slice();
  while (tempCollection.length > 0) {
    var element = [];
    for (var i = size; i > 0; i--) {
      if (tempCollection.length > 0) {
        element.push(tempCollection.shift());
      }
    }
    result.push(element);
  }


  return result;

}

chunk.message = {
  mustTypeCollection: "받아야 하는 값의 타입은 Array 타입 입니다.",
  mustTypeNumber: "받아야 하는 값의 타입은 Number 타입 입니다. 지금 받은 값은"
}

module.exports = chunk;

// chunk(['a', 'b', 'c', 'd'], 2)