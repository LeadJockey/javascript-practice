// TODO 뱀게임 완성해 보기

// EventDrivenStructure modules
(function(doc, exports){
  'use strict';

  const EventDrivenStructure = function(presetState){
    this.listeners = {};
    this.state = presetState || {};
  };

  EventDrivenStructure.prototype.on = function(type, callback){
    if(!this.listeners[type]){
      this.listeners[type] = callback;
    }
  };

  EventDrivenStructure.prototype.trigger = function(type){
    if(!this.listeners[type]){
      return;
    }
    this.listeners[type].call(this, type);
  };

  EventDrivenStructure.prototype.setState = function(type, newState){
    Object.assign(this.state, newState);
    this.trigger(type);
    // console.table(this.state);
  };

  EventDrivenStructure.prototype.renderedBy = function(type){
    const that = this;
    return function(){
      const args = Array.prototype.slice.call(arguments);
      that.on(type, function(){
        args.forEach(function(fn){
          fn();
        });
      });
    }
  };

  exports.M = exports.M || {};

  exports.M.EventDrivenStructure = EventDrivenStructure;

})(document, window);

(function(doc,exports){
  'use strict';
  
  const Pipeline = function(presetStages){
    this.stages = presetStages || [];
  };

  Pipeline.prototype.pipe = function(next){
    this.stages.push(next);
    return this;
  };
  Pipeline.prototype.process = function(data){
    let output = data || function(data){};
    this.stages.forEach(function(stage, count){
      output = stage(output);
    });
    return output;
  };

})(document, window);

(function(){
  'use strict';

  //const
  const directionKeyMap = {
    37:'left',
    38:'up',
    39:'right',
    40:'down'
  };
  //elem
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const size = canvas.width / 25; // 50
  // state
  const presetState = {
    map:[],
    protoSnakes:[1, 2, 3, 4, 5],
    snakes:[],
    head:{},
    food:{},
  };
  // structure
  const EDS = new window.M.EventDrivenStructure(presetState);
  const _state = EDS.state;
  // execute
  init();
  EDS.renderedBy('update-move')(
    // clear background
    // draw snake
    // draw food
    // draw near
    drawClearObj(),
    drawSnake('rgba(255, 0, 0, 1)'),
    drawFood('rgba(0, 255, 0, 1)'),
    drawNear('rgba(255, 0, 0, 0.3)')
  );
  EDS.renderedBy('update-food')(
    // draw newfood
  );
  EDS.renderedBy('update-crash')(
    //game over
  );
  onKeyDown();


  console.log(_state);

  function init(){
    _state.map = createMap();
    _state.snakes = createSnake(_state.protoSnakes, _state.map);
    _state.head = createHead(_state.snakes);
    _state.food = createFood(_state.head, _state.snakes[0]);
    // const initialProcess = new Pipeline(EDS.state);
    // initialProcess.pipe(createMap)
    //   .pipe(createSnake)
    //
    // function d(t,t2,t3){
    //   _state.map = createMap();
    //   _state.snakes = createSnake(_state.protoSnakes, _state.map);
    //   _state.head = createHead(_state.snakes);
    //   _state.food = createFood(_state.head, _state.snakes[0]);
    //
    // }
    // d(
    // drawSnake('rgba(255, 0, 0, 1)'),
    // drawFood('rgba(0, 255, 0, 1)'),
    // drawNear('rgba(255, 0, 0, 0.3)')
    // );

  }


  function onKeyDown(){
    window.addEventListener('keydown', function(event){
      const direction = directionKeyMap[event.keyCode] || '';
      if(direction !== ''){
        onMove(direction);
      }
    });
  }
  function onMove(direction){
    const newHead = getNearList(_state.head, _state.map)[direction];
    if(newHead){
      const newSnakes = Array.prototype.slice.call(_state.snakes);
      newSnakes.push(newHead);
      EDS.setState('update', {
        snakes:newSnakes,
        head:newHead
      });
    }
  }


  //create
  function createMap(state){
    const map = [];
    const len = canvas.width;
    let index = 0;
    for(let x = 0; x < len; x += size){
      for(let y = 0; y < len; y += size){
        map.push({
          x:x, // position x
          y:y, // position y
          hasObject:true, // is able to move,
          index:index++
        });
      }
    }
    state.map = map;
    console.log('created map');
    return state;
  }

  function createSnake(state){
    const snakes = [];
    state.protoSnakes.forEach((index) =>{snakes.push(Object.assign({}, state.map[index]))});
    state.snakes = snakes;
    console.log('created snake');
    return state;
  }

  function createHead(state){
    const head = state.snakes[0];
    state.snakes = head;
    console.log('created head');
    return state;
  }

  function createFood(head, food){
    let resultFood = food;

    if(`X${state.head.x}Y${state.head.y}` === `X${state.food.x}Y${state.food.y}`){
      const emptyList = getEmptyList();
      const randomPositionIndex = Math.floor(Math.random() * emptyList.length);
      resultFood = emptyList[randomPositionIndex];
      EDS.setState('update-food',{food:resultFood});
    }

    return resultFood;
  }

  // utils
  function getEmptyList(){
    return Array.prototype.slice.call(_state.map).filter((mapInfo) => mapInfo.hasObject);
  }
  function getNearList(head){
    const moveAbleList = [];
    const x = head.x;
    const y = head.y;
    let up = null;
    let down = null;
    let left = null;
    let right = null;

    getEmptyList().forEach(function(mapInfo){
      //up
      if((mapInfo.x === x) && (mapInfo.y === y - size)){
        moveAbleList.push(mapInfo);
        up = mapInfo;
      }
      //down
      if((mapInfo.x === x) && (mapInfo.y === y + size)){
        moveAbleList.push(mapInfo);
        down = mapInfo;
      }
      //left
      if((mapInfo.y === y) && (mapInfo.x === x - size)){
        moveAbleList.push(mapInfo);
        left = mapInfo;
      }
      //right
      if((mapInfo.y === y) && (mapInfo.x === x + size)){
        moveAbleList.push(mapInfo);
        right = mapInfo;
      }
    });

    return { up,down,left,right, all:moveAbleList };
  }

  //UI
  function drawSquare(mapInfo, size, color){
    ctx.fillStyle = color || '#fff';
    ctx.fillRect(mapInfo.x, mapInfo.y, size, size);
  }
  function drawClearObj(){
    return function(){
      drawSquare(_state.map[0], canvas.width);
      _state.map.forEach(mapInfo => mapInfo.hasObject = true);
    };
  }
  function drawObject(mapInfo, color){
    drawSquare(mapInfo, size, color || '#fff');
    mapInfo.hasObject = false;
  }
  function drawSnake(color){
    return function(){
      _state.snakes.forEach((mapInfo)=>drawObject(mapInfo,color));
    };
  }
  function drawFood(color){
    return function(){
      drawSquare(createFood(_state.head,_state.food),size, color);
    };
  }
  function drawNear(color){
    return function(){
      getNearList(_state.head).all.forEach((mapInfo) => {drawSquare(mapInfo, size, color)});
    }
  }



  // movement
  // function moveTo(head, direction){
  //   if(getNearList(head)[direction]){
  //     snakes.push(getNearList(head)[direction].index);
  //     head = getNearList(head)[direction];
  //     snakes.unshift();
  //   }else{
  //     console.log('can not move');
  //   }
  // }
  //
  // //create Object
  // function createFood(head, food){
  //   if(`X${head.x}Y${head.y}` === `X${food.x}Y${food.y}`){
  //     const randomPositionIndex = Math.floor(Math.random() * getEmptyList().length);
  //     return getEmptyList()[randomPositionIndex];
  //   }else{
  //     return food;
  //   }
  //
  // }
  //
  // // UI render : draw

  //
  // function drawNearSpot(head, color){
  //   getNearList(head).all.forEach(mapInfo => drawSquare(mapInfo, size, color));
  // }
  //
  // function drawFood(head, food, color){
  //   drawObject(createFood(head,food), color);
  // }
  //
  //
  // window.addEventListener('keydown', function(event){
  //   const direction = directionKeyMap[event.keyCode] || '';
  //   if(direction !== ''){
  //
  //   }
  // });


  //방위 탐색
  //
  // function searchLooper(moveList,color){
  //   const nextMoveList = [];
  //   moveList.map((em) => {
  //     search(em.x,em.y,size,color).map(o=>nextMoveList.push(o));
  //   });
  //   return nextMoveList;
  // }
  //
  // drawSquare(map[45].x,map[45].y,size,'red');
  //
  //
  // const s1 = searchLooper([map[45]], 'blue');
  // s1.forEach(pos => drawSquare(pos.x,pos.y,size,'blue'));
  // const s2 = searchLooper(s1,'green');
  // s2.forEach(pos => drawSquare(pos.x,pos.y,size,'green'));
  // const s3 = searchLooper(s2,'pink');
  // s2.forEach(pos => drawSquare(pos.x,pos.y,size,'green'));
  //
  // drawSquare(map[99].x,map[99].y,size,'yellow');


  // drawLine(map,'x',0,canvas.width);
  // drawLine(map);

  // drawSquare(map[0].x,map[0].y,size,'test')


  // map.forEach(pos => drawSquare(pos.x,pos.y,size, `${pos.x}/${pos.y}`));
})();