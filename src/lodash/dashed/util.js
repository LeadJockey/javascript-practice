const isArray = (arg) => {
  return Object.prototype.toString.call(arg) === '[object Array]';
};

const isInteger = (value)=>{
  Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && 
      isFinite(value) && 
      Math.floor(value) === value;
  };
}

module.exports = {
  isArray,
  isInteger
};
