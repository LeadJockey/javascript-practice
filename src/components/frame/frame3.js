(function(doc){
  'use strict';
  //const
  var FPS = 1000 / 60;
  var START_POSITION = 0; // 0~100%
  var END_POSITION = 100; // 0~100%
  var SWIPE_DURATION = 600; // ms
  var SLIDE_DURATION = 300; // ms
  var SWIPE_DELAY = 4000; // ms
  var SLIDE_DELAY = 1600; //ms

  //elem
  var ctx = selectOne('.prm_market');
  var elSlide = selectOne('.slide', ctx);
  var elImageList = selectAll('img', elSlide);
  var elSwipeList = selectAll('.panel', elSlide);
  var elSlideList = selectAll('.item_panel', elSlide);

  //value
  var tick = 0; // 0~1, 0=0%, 1=100%
  var animationProgress = 0;
  var framePool = {
    0:function(){
      elSwipeList[0].style.left = '0';
      elSwipeList[1].style.left = '100%';
      elSwipeList[2].style.left = '100%';
      elSlideList[0].style.height = '100%';
      elSlideList[1].style.height = '0';
      elSlideList[2].style.height = '0';
      nextFrame(1)();
    },
    1:function(){
      delay(animate(swipeLeft(elSwipeList[0], elSwipeList[1]), nextFrame(2)), SWIPE_DELAY);
    },
    2:function(){
      delay(animate(slideDown(elSlideList[1]), nextFrame(3)), SLIDE_DELAY);
    },
    3:function(){
      delay(animate(slideDown(elSlideList[2]), nextFrame(4)), SLIDE_DELAY);
    },
    4:function(){
      delay(animate(swipeLeft(elSwipeList[1], elSwipeList[2]), nextFrame(5)), SLIDE_DELAY);
    },
    5:function(){
      delay(animate(swipeLeft(elSwipeList[2], elSwipeList[0]), nextFrame(0)), SWIPE_DELAY);
    }
  };

  play();

  //util
  function selectOne(selector, parentDOM){
    return (parentDOM || doc).querySelector(selector);
  }
  function selectAll(selector, parentDOM){
    return Array.prototype.slice.call((parentDOM || doc).querySelectorAll(selector));
  }
  //void
  function play(){
    loadImages(elImageList, nextFrame(0));
  }
  function easeInOutExpo(t, b, c, d){
    if(t === 0){
      return b;
    }
    if(t === d){
      return b + c;
    }
    if((t /= d / 2) < 1){
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
  function delay(next, ms){
    setTimeout(function(){
      next();
    }, ms || 1000);
  }
  function loadImages(imageList, next){
    var loadedImageList = [];
    imageList.forEach(function(img, index){
      img.onload = function(){
        loadedImageList.push(img);
        console.log('load img ', index);
        console.table({
          load:imageList.length,
          loaded:loadedImageList.length
        });
        if(imageList.length === loadedImageList.length){
          next();
        }
      }
    });
  }
  //return function
  function animate(frame, next){
    return function(){
      frame();
      if(Math.abs(animationProgress) < END_POSITION){
        setTimeout(function(){
          animate(frame, next)();
        }, FPS);
      }else{
        tick = 0;
        animationProgress = 0;
        if(next){
          next();
        }
      }
    };
  }
  function nextFrame(frameIndex){
    return function(){
      if(!framePool[frameIndex]){
        return;
      }
      framePool[frameIndex].call(this, frameIndex);
    };
  }
  function swipeLeft(swipeTarget, nextTarget){
    return function(){
      var percent = Number(easeInOutExpo((tick += FPS), START_POSITION, END_POSITION, SWIPE_DURATION).toFixed(0));
      animationProgress = percent;
      percent *= -1;
      swipeTarget.style.left = percent + '%';
      nextTarget.style.left = (percent + END_POSITION) + '%';
    };
  }
  function slideDown(slideTarget){
    return function(){
      var percent = Number(easeInOutExpo((tick += FPS), START_POSITION, END_POSITION, SLIDE_DURATION).toFixed(0));
      animationProgress = percent;
      slideTarget.style.height = percent + '%';
      barHandler(slideTarget, percent);
    };
  }
  function barHandler(fadeOutTarget, percent){
    var fadeOutTargetStyle = fadeOutTarget.style;
    if(percent === 0){
      fadeOutTargetStyle.borderBottom = '4px solid #1a1a1a';
    }
    if(percent > 98){
      fadeOutTargetStyle.borderBottom = '0 none';
    }
  }
})(document);
