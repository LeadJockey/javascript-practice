(function(doc){
  'use strict';
  //const
  var FPS = 1000/60;
  var CLIENT_WIDTH = 100; // (320px-375px) 100%
  var MOTION_SPEED = 0.02; // 0.01 , 0.02, 0.04
  var FRAME_POOL = {
    0:function(){
      console.log('frame 0');
      delay(animate(swipeLeft, nextFrame(1)));
    },
    1:function(){
      console.log('frame 1');
      delay(animate(slideDown, nextFrame(2)));
      slideIndex2 = slideIndex2 < slideLastIndex2 ? slideIndex2 + 1:0;

    },
    2:function(){
      console.log('frame 2');
      // delay(nextFrame(0)); // frame 0 으로 이동 오토플레이
      delay(animate(slideDown));
      slideIndex2 = slideIndex2 < slideLastIndex2 ? slideIndex2 + 1:0;
    }
  };
  //elem
  var ctx = selectOne('.wrap');
  var items = selectAll('.comp_slide .item_slide', ctx);
  var items2 = selectAll('.wrap_test', ctx);
  //value
  var slideLastIndex = items.length <= 0 ? 0 : items.length-1;
  var slideLastIndex2 = items2.length <= 0 ? 0 : items2.length-1;
  var slideIndex = 0;
  var slideIndex2 = 0;
  var currentFrameIndex = 0;
  var tick = 0; // 0~1, 0=0%, 1=100%

  init();

  //void
  function init(){
    if(items.length < 1){
      return;
    }
    play();
  }
  function selectOne(selector, parentDOM){
    return (parentDOM || doc).querySelector(selector);
  }
  function selectAll(selector, parentDOM){
    return Array.prototype.slice.call((parentDOM || doc).querySelectorAll(selector));
  }
  function leaner(t){
    return t;
  }
  function ease(t){
    return t * t * t * t * t;
  }
  function swipeLeft(){
    var percent = Number((ease(tick -= MOTION_SPEED) * CLIENT_WIDTH).toFixed(0));
    items[slideIndex].style.left = percent + '%';
    (items[slideIndex+1]||items[0]).style.left = (percent + CLIENT_WIDTH) + '%';
  }
  function slideDown(){
    var percent = Number((ease(tick += MOTION_SPEED) * CLIENT_WIDTH).toFixed(0));
    var target = items2[slideIndex2];
    target.style.height = percent + '%';
  }
  function play(){
    nextFrame(currentFrameIndex)();
  }
  function delay(next, ms){
    setTimeout(function(){
      next();
    }, ms || 1000);
  }
  //return function
  function animate(frame, next){
    return function(){
      frame();
      if(Math.abs(tick) < 1){
        setTimeout(function(){
          animate(frame, next)();
        }, FPS);
      }else{
        slideIndex = slideIndex < slideLastIndex ? slideIndex+1 : 0;
        tick = 0;
        if(next){
          next();
        }
      }
    };
  }
  function nextFrame(frameIndex){
    return function(){
      currentFrameIndex = frameIndex;
      FRAME_POOL[currentFrameIndex].call(this, frameIndex);
    };
  }
})(document);
