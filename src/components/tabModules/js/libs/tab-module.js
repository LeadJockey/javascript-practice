window.TabModule = (function(_){
  var defaultOption = {
    element:null,
    itemSelector:'.items',
    hoverClassName:'hover',
    activeClassName:'on',
    onClick:function(e, index){}
  };
  var EVENTS = {
    // private
    _CURSOR_ON:'mouseover',
    _CURSOR_OFF:'mouseout',
    // public
    CLICK:'click'
  };

  function _tabModule(options){
    // merge options to defaultOptions
    var opts = Object.assign({}, defaultOption, options);
    var items = _.$$(opts.itemSelector);

    _.delegate(opts.element, EVENTS.CLICK, opts.itemSelector, function(e){
      var index = _getIndex(items, this);
      // class 초기화
      _removeClassName(opts.activeClassName);
      this.classList.add(opts.activeClassName);
      opts.onClick(e,index);
    });

    _.delegate(opts.element, EVENTS._CURSOR_ON, opts.itemSelector, function(){
      this.classList.add(opts.hoverClassName);
    });

    _.delegate(opts.element, EVENTS._CURSOR_OFF, opts.itemSelector, function(){
      _removeClassName(opts.hoverClassName);
    });

    function _removeClassName(className){
      items.forEach(function(item){
        item.classList.remove(className);
      });
    }

    return {
      moveToPoint: function(index){
        _removeClassName(opts.activeClassName);
        items[index].classList.add(opts.activeClassName);
      }
    };
  }

  function _getIndex(list, item){
    for(var i =0; i< list.length; i++){
      if(list[i] === item){
        return i;
      }
    }
    return -1;
  }

  return _tabModule;
})(utils);