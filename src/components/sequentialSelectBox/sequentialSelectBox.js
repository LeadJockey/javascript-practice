// 변수 선언부
const $ctx = $('#wrap');
const $menu = $ctx.find('.list_menu');
const $menuList = $menu.find('.menu_item');
const TF = _templateFactory();
const state = {
  currentMenuIndex:0,
  menus:[
    {
      isClickAble:true, // 테그 변환 기준 : true => <a></a>, false => <span></span>
      isContOpened:false, // 메뉴 콘텐츠 노출 기준
      isSelected:false, // 메뉴 선택 변화 감지 기준
      isChangedText:false, // 메뉴 text 변화 감지 기준
      text:'지역시', // 변화 텍스트
      defaultText:'지역시' // 기본 텍스트
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

// 함수 실행부
bindEvents();
render(
  _stateLog,
  menuTab,
  menuCont
);
$(state).trigger('state-updated');

// 함수 선언부
/**
 * 스테이트의 상태값을 변경할 때는 반드시 이 함수를 사용할 것.
 * 사용은 기본 스테이트 객체에 새로운 스테이트 객체를 추가하는 식으로 활용.
 * 기본객체가 변하면 'state-update'라는 커스텀 이벤트를 발생시킴.
 * @param state
 * @param newState
 */
function setState(state, newState){
  $.extend(state, newState);
  $(state).trigger('state-updated');
}

/**
 * 인자받은 콜백 함수들을 실행시켜주는 함수.
 * 스테이트가 업데이트 될때마다 작동.
 * 콜백의 인자는 없어야 함.
 * @param arguments : functions
 */
function render(){
  const args = Array.prototype.slice.call(arguments);

  function _reDraw(){
    args.forEach(function(func){
      func();
    });
  }

  $(state).on('state-updated', _reDraw);
}

/**
 * 이벤트 바인딩 함수
 */
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

/**
 * js render 사용시 탬플릿을 캐싱해 주기 위한 함수.
 * @returns {{getTemplate : getTemplate}}
 * @private
 */
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

/**
 * 스테이트 변화를 감시하고 콘솔테이블로 'state-update' 발동 시마다 스테이트를 보여줌
 * @private
 */
function _stateLog(){
  console.table(state.menus);
}

/**
 * 메뉴탭 관련 랜더링 함수
 */
function menuTab(){
  state.menus.forEach(function(menuItem, i){
    const text = menuItem.text || '';
    const tagTypeA = '<a href="javascript:;" class="link_menu">' + text + '</a>';
    const tagTypeSpan = '<span class="text_menu">' + text + '</span>';
    const html = menuItem.isClickAble ? tagTypeA:tagTypeSpan;
    $menuList.eq(i).html(html);
  });
}

/**
 * 메뉴 콘텐츠 관련 랜더링 함수
 */
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

