var utils = {
  $:function(selector, rootEl){
    var rootElem = rootEl || document;
    return rootElem.querySelector(selector);
  },
  $$:function(selector, rootEl){
    var rootElem = rootEl || document;
    return utils.toArray(rootElem.querySelectorAll(selector));
  },
  toArray:function(arrayLikeObject){
    return Array.prototype.slice.call(arrayLikeObject);
  },
  delegate:function(rootEl, eventType, targetSelector, eventHndr){
    rootEl.addEventListener(eventType, function(e){
      var delegatee = e.target.closest(targetSelector);
      if(delegatee){
        eventHndr.call(delegatee,e);
      }
    });
  },
  setStyle:function(dom, styleOptions){
    if(dom.forEach){
      dom.forEach(function(el){
        Object.assign(el.style, styleOptions);
      });
    }else{
      Object.assign(dom.style, styleOptions);
    }
  }
};