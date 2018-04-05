const isArray = function (target) {
  return Object.prototype.toString.call(target) === '[object Array]';
};


module.exports = isArray