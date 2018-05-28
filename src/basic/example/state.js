






(function($){
  'use strict';

  //--- declare ---//
  //elem
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const btn = document.getElementById('btn');

  //state
  const state = {
    index:0
  };


  //--- execute ---//
  render(
    clearScreen,
    drawBox(20,'blue')
  );
  bindEvents();


  //--- functions : pattern basic ---//

  //setState - state update
  function setState(newState){
    $.extend(state, newState);
    $(state).trigger('state:updated');
    console.table(state);
  }

  //render - state change listener & rending components (functions)
  function render(){
    const rendingFunctions = Array.prototype.slice.call(arguments);
    $(state).on('state:updated', () =>{
      rendingFunctions.forEach((rendingFunc) =>{
        rendingFunc();
      });
    });
  }

  //--- functions : events binder ---//

  function bindEvents(){
    btn.addEventListener('click', () =>{
      const idx = state.index;
      setState({ index:idx + 1 });
    });
  }

  //--- functions : tool & create functions ---//

  function drawSquare(x, y, w, h, c, t, tc){
    ctx.fillStyle = c || 'black';
    ctx.fillRect(x, y, w, h);
    if(t){
      ctx.fillStyle = tc || c;
      ctx.fillText(t, x + (x / 2), y + (y / 2), x * y);
    }
  }

  function getRandom(max){
    return Math.floor(Math.random() * max) + 1;
  }

  //--- functions : rending functions ---//

  function drawBox(size, color){
    return ()=>{
      drawSquare(
        getRandom(state.index * size),
        getRandom(state.index * size),
        size,
        size,
        color
      );
    };
  }

  function clearScreen(){
    drawSquare(0, 0, canvas.width, canvas.height, '#fff');
  }


})(jQuery);