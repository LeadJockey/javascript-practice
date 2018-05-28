(function(exports){
  'use strict';

  const Pipeline = function(presetStages){
    this.stages = presetStages || [];
  };

  Pipeline.prototype.pipe = function(stage){
    this.stages.push(stage);
    return this;
  };

  Pipeline.prototype.process = function(data){
    let convertedData = data || function(data, order){};
    this.stages.forEach((stage)=>{
      convertedData = stage(convertedData);
    });
    return convertedData;
  };

  exports.M = exports.M || {};

  exports.M.Pipeline = Pipeline;

})(window);