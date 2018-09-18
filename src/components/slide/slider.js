(function(exports){
  'use strict';
  exports.FE = exports.FE ? exports.FE : {};
  exports.FE.M = exports.FE.M ? exports.FE.M : {};
  exports.FE.M.Slider = exports.FE.M.Slider ? exports.FE.M.Slider : Slider;

  function Slider(ctx){
    this.ctx = ctx;
    this.state = {
      currentIndex:0,
      startIndex:0,
      length:0,
      width:0,
      height:0
    };
    this.selector = {
      comp:'.comp_slide',
      listWrap:'.box_slide',
      list:'.list_slide',
      item:'.item_slide'
    };
    this.elem = {};
    this.init();
  }
  Slider.prototype.init = function(){
    if(!this.ctx && this.state.length){
      return;
    }
    this.setElem();
    this.setItemLength();
    this.setBasicStyle();
    this.setSliderSize();
  };
  //select
  Slider.prototype.selectAll = function(selector, parentDOM){
    return Array.prototype.slice.call((parentDOM || this.ctx).querySelectorAll(selector));
  };
  Slider.prototype.selectOne = function(selector, parentDOM){
    return (parentDOM || this.ctx).querySelector(selector);
  };
  //get
  Slider.prototype.getCurrentIndex = function(){
    return this.state.currentIndex;
  };
  Slider.prototype.getCurrentItem = function(){
    var elemComp = this.selectOne(this.selector.comp);
    return this.selectAll(this.selector.item, elemComp)[this.state.currentIndex];
  };
  Slider.prototype.getSliderSize = function(){
    return {
      width:this.elem.comp.clientWidth || 0,
      height:this.elem.item[this.state.currentIndex].clientHeight || 0
    };
  };
  //set
  Slider.prototype.setBasicStyle = function(){
    var elemListStyle = this.elem.list.style;
    var elemCompStyle = this.elem.comp.style;
    elemListStyle.overflow = 'hidden';
    elemListStyle.transitionTimingFunction = 'cubic-bezier(0,0,0.25,1)';
    elemListStyle.transitionDuration = '300ms';
    elemListStyle.transform = 'translate(0,0)';
    elemListStyle.webkitTransform = 'translate(0,0)';
    elemListStyle.msTransform = 'translate(0,0)';
    elemCompStyle.overflow = 'hidden';
    elemCompStyle.position = 'relative';
    this.elem.item.forEach(function(item, index){
      item.style.float = 'left';
    });
  };
  Slider.prototype.setStartIndex = function(index){
    this.setState({
      currentIndex:index,
      startIndex:index
    });
  };
  Slider.prototype.setSelector = function(newSelector){
    Object.assign(this.selector, newSelector);
    console.table(this.selector);
  };
  Slider.prototype.setSliderSize = function(){
    var that = this;
    var sliderSize = this.getSliderSize();
    this.setState({
      width:sliderSize.width,
      height:sliderSize.height
    });
    this.elem.list.style.width = ((this.state.length * this.state.width) || 0) + 'px';
    this.elem.item.forEach(function(item, index){
      item.style.width = that.state.width + 'px';
    });
    this.elem.list.style.height = (this.state.height||0) + 'px';
  };
  Slider.prototype.setElem = function(){
    this.elem.comp = this.selectOne(this.selector.comp);
    this.elem.listWrap = this.selectOne(this.selector.listWrap, this.elem.comp);
    this.elem.list = this.selectOne(this.selector.list, this.elem.listWrap);
    this.elem.item = this.selectAll(this.selector.item, this.elem.list);
  };
  Slider.prototype.setItemLength = function(){
    this.setState({length:this.elem.item.length});
  };
  Slider.prototype.setState = function(newState){
    Object.assign(this.state, newState);
    console.table(this.state);
  };
  //move
  Slider.prototype.moveToPoint = function(index){
    this.setState({
      currentIndex:index
    });
    this.slide();
    this.setSliderSize();
  };
  Slider.prototype.moveToNext = function(){
    if(!this.hasNext()){
      return;
    }
    this.moveToPoint(this.state.currentIndex + 1);
  };
  Slider.prototype.moveToPrev = function(){
    if(!this.hasPrev()){
      return;
    }
    this.moveToPoint(this.state.currentIndex - 1);
  };
  //other
  Slider.prototype.hasNext = function(){
    return (this.state.currentIndex + 1) < this.state.length;
  };
  Slider.prototype.hasPrev = function(){
    return (this.state.currentIndex - 1) > -1;
  };
  Slider.prototype.slide = function(){
    var translateX = -1 * (this.state.width * this.state.currentIndex);
    this.elem.list.style.transform = 'translate( ' + translateX + 'px,0)';
  };
  Slider.prototype.resizeForImgLoad = function(){
    var that = this;
    this.selectAll('img', this.elem.item[this.state.currentIndex]).forEach(function(image, index){
      image.addEventListener('load', function(){
        that.setSliderSize();
      });
    });
  };

})(window);
