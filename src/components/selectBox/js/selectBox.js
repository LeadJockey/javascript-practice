(function(UI){
  'use strict';

  function SelectBox(opts){
    this.ctx = opts.ctx;
  }

  SelectBox.prototype.showLayer = function(){};
  SelectBox.prototype.hideLayer = function(){};
  SelectBox.prototype.toggleLayer = function(){};
  SelectBox.prototype.setDisable = function(){};
  SelectBox.prototype.setEnable = function(){};
  SelectBox.prototype.setSelectedText = function(){};


  UI.view = UI.view || {};
  UI.view.SelectBox = SelectBox;

})(window.UI = window.UI || {});
