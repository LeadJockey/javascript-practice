(function(){
  'use strict';

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const size = 100;

  /*[
    [0,0,0],
    [1,1,1],
    [0,1,0]
  ]*/

  function getMap(){
    const map = [];
    const len = canvas.width;

    for(let x = 0; x < len; x += size){
      for(let y = 0; y < len; y += size){
        map.push({
          x:x, // position x
          y:y, // position y
          m:true // is able to move
        });
      }
    }

    return map;
  }

  const map = getMap();
  console.log(map);


  function drawSquare(x, y, size, text){
    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, size, size);
    ctx.font = 'italic 10pt Calibri';
    ctx.fillStyle = "#ff0000";
    ctx.fillText(text, x+20,y+40);
  }
  map.forEach(pos => drawSquare(pos.x,pos.y,size, `${pos.x}/${pos.y}`));
})();