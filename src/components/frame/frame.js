(function(exports, doc){
  'use strict';
  // constant
  var IMAGES = {
    IMG_INTRO01: "./dist/images/img_intro01.png",
    IMG_QR: "./dist/images/img_intro02.png",
    TXT_INTRO01: "./dist/images/txt_intro01.png",
    TXT_INTRO02: "./dist/images/txt_intro02.png",
    TXT_INTRO03: "./dist/images/txt_intro03.png",
    TXT_INTRO04: "./dist/images/txt_intro04.png",
    TXT_INTRO05: "./dist/images/txt_intro05.png",
    TXT_INTRO06: "./dist/images/txt_intro06.png",
    IMG_BLACK: "./dist/images/frame_intro1.png"
  };
  var loadedImages = {};
  // variables
  var stageIndex = -1;
  var percent = 0.5;
  var opacity = 1;

  // stage
  var stage = {
    stage0: function() {
      // reset
      percent = 0;
      opacity = 1;
      elBar.style.opacity = opacity;

      changeContent(
        [elTopImage, elBottomImage],
        [IMAGES.IMG_INTRO01, IMAGES.TXT_INTRO01],
        function() {
          elTop.style.height = "49%";
          elCoin.style.display = "block";
          next(500);
        }
      );
    },
    stage1: function() {
      changeContent(elBottomImage, IMAGES.TXT_INTRO02);
      next(500);
    },
    stage2: function() {
      changeContent(elBottomImage, IMAGES.TXT_INTRO03);
      next(500);
    },
    stage3: function() {
      changeContent(elBottomImage, IMAGES.TXT_INTRO04);
      next();
    },
    stage4: function() {
      elCoin.style.display = "none";
      elTop.style.visibility = "hidden";
      elTop.style.height = "0";
      elBottom.style.visibility = "hidden";
      // elTop.classList.add("active");
      changeContent(elTopImage, IMAGES.IMG_BLACK);
      changeContent(elBottomImage, IMAGES.IMG_QR, function() {
        elBottom.style.visibility = "visible";
        elTop.style.visibility = "visible";
      });

      // changeContent(elTopImage, IMAGES.IMG_INTRO02);
      // elTop.classList.add("active");
      // changeContent(elBottomImage, IMAGES.TXT_INTRO03);
      next();
    },
    stage5: function() {
      animate();
      next(0);
    }
  };

  // elements
  var elContainer = document.getElementById("wrap");
  var elTop = document.getElementById("top");
  var elBottom = document.getElementById("bottom");
  var elTopImage = document.getElementById("img_top");
  var elBottomImage = document.getElementById("img_bottom");
  var elCoin = document.getElementById("coin");
  var elBar = document.querySelector('#img_bar'); //.style.height = '1px'

  // preload
  function preloadImage(src, key) {
    var my_image = new Image();
    my_image.src = src;

    my_image.onload = function() {
      loadedImages[key] = my_image;
      if (objectSize(loadedImages) === objectSize(IMAGES)) {
        // stage invoker
        next(100);
      }
    };
  }

  for (var key in IMAGES) {
    preloadImage(IMAGES[key], key);
  }

  // utils
  function isArray(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }

  function objectSize(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }

  function easeInQuint(t) {
    return t * t * t * t * t;
  }

  // module
  function changeContent(target, content, fn) {
    if (typeof content === "string") {
      target.src = content;
      target.onload = function() {
        if (fn) {
          fn();
        }
      };
    }

    if (isArray(target)) {
      var count = 0;
      for (var i = 0; i < target.length; i++) {
        target[i].onload = function() {
          count++;
          if (count === target.length) {
            fn();
          }
        };

        target[i].src = "";
        target[i].src = content[i];
      }
    }
  }

  function next(deley) {
    var _deley = deley || 1000;
    var func = stage["stage" + ++stageIndex];
    if (typeof func === "function") {
      setTimeout(function() {
        func();
      }, _deley);
    }
  }

  // motion
  function animate() {
    var _p = (easeInQuint((percent += 0.01)) * 100).toFixed(0) + "%";
    elTop.style.height = _p;
    if (percent < 1) {
      setTimeout(function() {
        animate();
      }, 1000 / 160);
    } else {
      changeContent(elBottomImage, IMAGES.TXT_INTRO06);
      animateReverse();
    }
  }

  function animateReverse() {
    var _p = (easeInQuint((percent -= 0.01)) * 100).toFixed(0) + "%";
    elTop.style.height = _p;
    if (percent < 0.6 && opacity > 0) {
      opacity -= 0.1
      elBar.style.opacity = opacity
    }
    if (percent > 0) {
      setTimeout(function() {
        animateReverse();
      }, 1000 / 120);
    } else {
      stageIndex = -1;
      next();
    }
  }


})(window, document);
