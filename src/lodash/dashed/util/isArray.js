const isArray = (arg) => {
  return Object.prototype.toString.call(arg) === '[object Array]';
};



module.exports = isArray;
