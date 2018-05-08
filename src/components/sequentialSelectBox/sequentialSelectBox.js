
const $ctx = $('#wrap');
const $menu = $ctx.find('.list_menu');
const $menuList = $menu.find('.menu_item');
const TF = _templateFactory();
const state = {
  currentMenuIndex:0,
  menus:[
    {
      isClickAble:true,
      isContOpened:false,
      isSelected:false,
      isChangedText:false,
      text:'지역시',
      defaultText:'지역시'
    },
    {
      isClickAble:false,
      isContOpened:false,
      isSelected:false,
      isChangedText:false,
      text:'지역구',
      defaultText:'지역구'
    },
    {
      isClickAble:false,
      isContOpened:false,
      isSelected:false,
      isChangedText:false,
      text:'지역동',
      defaultText:'지역동'
    }
  ]
};

bindEvents();
render(
  _stateLog,
  menuTab,
  menuCont,
);

function setState(state, newState){
  $.extend(state, newState);
  $(state).trigger('state-updated');
}
function render(){
  const args = Array.prototype.slice.call(arguments);

  function _reDraw(){
    args.forEach(function(func){
      func();
    });
  }

  $(state).on('state-updated', _reDraw);
}
function bindEvents(){
  // 메뉴 탬 클릭시
  $menuList.on('click', 'a' ,function(){
    const $this = $(this);
    const $menuItem = $this.parents('.menu_item');
    const idx = $menuItem.index();
    const menus = state.menus.slice();
    const targetMenu = menus[idx];
    const tmpFlag = targetMenu.isContOpened;

    //toggle
    targetMenu.isContOpened = !tmpFlag;

    setState(state, { currentMenuIndex:idx, menus:menus });
  });
  // 지역 클릭시 (동적)
  $ctx.on('click','.tmpl_ssb a', function(){
    const $this = $(this);
    const idx = $this.parents('.tmpl_ssb').data('tmpl-idx');
    const selectedText = $this.text();
    const menus = state.menus.slice();
    const targetMenu = menus[idx];
    const nextMenu = menus[idx+1]||targetMenu;
    const text = targetMenu.text;

    //toggle 행위에대한 반응
    targetMenu.text = selectedText;
    targetMenu.isChangedText = text !== selectedText;
    targetMenu.isSelected = true;
    targetMenu.isContOpened = false;

    // 지역 선택에 대한 반응
    if(targetMenu.isChangedText){
      if(nextMenu.isClickAble){
        //reset
        menus.forEach(function(menu,i){
          if(i > idx){
            menu.isClickAble = false;
            menu.isSelected = false;
            menu.text = menu.defaultText;
          }
        });
      }else{
        //active next
        nextMenu.isClickAble = true;
      }
    }

    setState(state, { menus:menus });
  });
}

function _templateFactory(){
  const templateContainer = {};

  function getTemplate(templateId){
    if(!templateContainer[templateId]){
      templateContainer[templateId] = $.templates(templateId);
    }
    return templateContainer[templateId];
  }

  return {
    getTemplate:getTemplate
  }
}
function _stateLog(){
  console.table(state.menus);
}

function menuTab(){
  state.menus.forEach(function(menuItem, i){
    const text = menuItem.text || '';
    const tagTypeA = '<a href="javascript:;" class="link_menu">' + text + '</a>';
    const tagTypeSpan = '<span class="text_menu">' + text + '</span>';
    const html = menuItem.isClickAble ? tagTypeA:tagTypeSpan;
    $menuList.eq(i).html(html);
  });
}

function menuCont(){
  //TODO ajex로 데이터 받는 것을 가정 -start
  const DATA1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  const DATA2 = [1,2,3,4,5,6,7,8,9];
  const DATA3 = [1,2,3,4,5,6,7,8,9,10,11,12];
  const DATA_MAP = {
    0:{name:'지역시',list:DATA1,idx:0},
    1:{name:'지역구',list:DATA2,idx:1},
    2:{name:'지역동',list:DATA3,idx:2},
  };
  const RESULT_DATA = DATA_MAP[state.currentMenuIndex];
  //TODO ajex로 데이터 받는 것을 가정 -end

  $ctx.find('.tmpl_ssb').remove();
  if(state.menus[state.currentMenuIndex].isContOpened){
    const html = TF.getTemplate('#sequentialSelectBoxTemplate').render(RESULT_DATA);
    $menu.after(html);
  }
}

$(state).trigger('state-updated');