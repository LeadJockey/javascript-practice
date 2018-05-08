// basicTab
(function(_){
  'use strict';
  var panels = _.$$('#basicTab .items-panel');
  _.setStyle(panels,{display:'none'});
  _.setStyle(panels[0],{display:'block'});
  var tabModule = TabModule({
    element:_.$('#basicTab .list-tab'),
    itemSelector:'#basicTab .items-tab',
    activeClassName:'on',
    onClick:function(e, index){
      _.setStyle(panels,{display:'none'});
      _.setStyle(panels[index],{display:'block'});
      console.log('onClick callback called ' + index);
    }
  });
})(utils);

// slidingTab
(function(_){
  'use strict';
  var fs = Flipsnap(_.$('#slidingTab .list-slide'));
  var tabModule = TabModule({
    element:_.$('#slidingTab .list-tab'),
    itemSelector:'#slidingTab .items-tab',
    activeClassName:'on',
    onClick:function(e, index){
      fs.moveToPoint(index);
    }
  });

  fs.element.addEventListener('fspointmove', function(){
    tabModule.moveToPoint(fs.currentPoint);
  });

})(utils);

// tabNavigation
(function(_){
  'use strict';
  var fs = Flipsnap(_.$('#tabNavigation .list-slide'));
  var tabModule = TabModule({
    element:_.$('#tabNavigation .nav-tab'),
    itemSelector:'#tabNavigation .items-nav',
    activeClassName:'on',
    onClick:function(e, index){
      fs.moveToPoint(index);
    }
  });

  fs.element.addEventListener('fspointmove', function(){
    console.log(fs.currentPoint);
    tabModule.moveToPoint(fs.currentPoint);
  });
})(utils);

