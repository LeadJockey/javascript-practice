const $ctx = $('#wrap');

const $menu = $ctx.find('.list_menu');
const $menuList = $menu.find('.menu_item');
const $contList = $ctx.find('.list_cont .cont_item');
const state = {
  menus:[
    {
      isClickAble:true,
      text:'Lv1'
    },
    {
      isClickAble:false,
      text:'Lv2'
    },
    {
      isClickAble:false,
      text:'Lv3'
    }
  ]
};



bindEvents();
render(
  stateLog,
  activeMenu,
  showMenuCont
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
  $menuList.on('click', function(){
    console.log('clicked');
    const $this = $(this);
    const menus = state.menus.slice();
    const idx = $this.index();
    const $currCont = $contList.eq(idx);
    $this.toggleClass('_active');
    menus[idx].isClickAble = $this.hasClass('_active');


    // if($this.hasClass('_active')){
    //   // $currCont.removeClass('hide').siblings().addClass('hide');
    //   menus.forEach(function(el,i){
    //     if(i < idx){
    //       el.isClickAble = false;
    //     }
    //   });
    // }else{
    //   // $currCont.addClass('hide');
    // }
    setState(state, { menus:menus });
  });
}

function stateLog(){
  console.table(state.menus);
}

function activeMenu(){
  state.menus.forEach(function(menuItem, i){
    const text = menuItem.text || '';
    const tagTypeA = '<a href="javascript:;" class="link_menu">' + text + '</a>';
    const tagTypeSpan = '<span class="text_menu">' + text + '</span>';
    const html = menuItem.isClickAble ? tagTypeA:tagTypeSpan;
    $menuList.eq(i).html(html);
  });
}
function showMenuCont(){
  state.menus.forEach(function(menu,i){
    const $currentCont = $contList.eq(i);
    if(menu.isClickAble){
      $currentCont.removeClass('hide').siblings().addClass('hide');
    }else{
      $currentCont.addClass('hide');
    }
  });
}

$(state).trigger('state-updated');