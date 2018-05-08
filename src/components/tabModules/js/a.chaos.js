// 컬렉션 지정
var collection = select('#basicTab');

// 타깃 엘리먼트 셀렉션
var tabItems = find(collection, '.list-tab li');
var panels = find(collection, '.list-panel li');

console.log(tabItems);
console.log(panels);


for(var i = 0; i < tabItems.length; i++){

  tabItems[i].setAttribute('data-index', i);

  if(i > 0){
    panels[i].style.display = 'none';
  }

  tabItems[i].addEventListener('click', function(){
    var tabItem = this;
    var index = this.dataset.index;
    tabItem.classList.add('on');

    for(var j = 0; j < tabItems.length; j++){
      if(tabItems[j] !== tabItem){
        tabItems[j].classList.remove('on');
      }
      if(j !== index){
        panels[j].style.display = 'none';
      }
    }

    panels[index].style.display = 'block';

  });
}

function select(name){
  return document.querySelectorAll(name);
}

function find(root, targetName){
  root.querySelectorAll(targetName);
}