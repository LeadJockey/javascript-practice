(function () {
  'use strict';
  var innerSelect = document.querySelector('.inner_select');
  var btnSelect = innerSelect.querySelector('.btn_select');
  var layerSelect = innerSelect.querySelector('.layer_select');
  var txt_select = btnSelect.querySelector('.txt_select');
  var selectItems = layerSelect.querySelectorAll('li');
  var isOpen = false;

  init();

  function init(){
    bindEvents();
  }
  function bindEvents(){
    document.addEventListener('click', function (e) {
      if (!innerSelect.contains(e.target)) {
        hideLayer();
      }
    }, false);
    btnSelect.addEventListener('click', btnClickHandler, false);
    addEventListenerList(selectItems, 'click', itemClickHandler);
  }
  function addClass(elem, className) {
    var classes = elem.className.split(' '); // 기존에 가지고 있던 클래스 문자열을 배열로 쪼갠다.
    if (classes.indexOf(className) < 0) { // 내가 찾는 className이 없다면
      classes.push(className); // 해당 클래스를 classes push 한다.
      elem.className = classes.join(" "); // 해당 엘리먼트에 다시 className을 심는다.
    }
  }
  function removeClass(elem, className) {
    var classes = elem.className.split(' ');
    var index = classes.indexOf(className);
    if (index > -1) {
      classes.splice(index, 1);
    }
    elem.className = classes.join(' ');
  }
  function hideLayer() {
    isOpen = false;
    addClass(layerSelect, 'hide');
    removeClass(btnSelect, 'open_select');
  }
  function showLayer() {
    isOpen = true;
    removeClass(layerSelect, 'hide');
    addClass(btnSelect, 'open_select');
  }
  function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  }
  function btnClickHandler(e) {
    e.preventDefault();
    if (!isOpen) {
      showLayer()
    } else {
      hideLayer()
    }
  }
  function itemClickHandler(e) {
    e.preventDefault();
    txt_select.innerText = this.innerText;
    hideLayer();
  }
})();
