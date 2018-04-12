const _  = require('lodash');
_.isMatch

const baseMatch = function(value, comparator){

};

const isMatch = function(value, comparator){
  return value === comparator || baseMatch(value, comparator);
};

module.exports = isMatch;