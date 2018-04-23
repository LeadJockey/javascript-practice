/**
 * 선수목록 리스트에서 선수의 썸내일을 클릭했을때 선수의 세부정보를 선수열(row)하단에 붙여서 노출해주는 모듈입니다.
 * option 값을 기입해 주어야 합니다
 *  생성자 함수 DetailBox 에서 // value setting - must need 이쪽 주석 부분을 참고 하시고 채워주세요
 *
 * 박스를 그려주는 방식은 jsRender 를 사용합니다.
 * jsRender 는 스크립트 기반으로 지정된 하나의 template 를 id 기준으로 잡아서 붙혀주는 역할을 하고, 옵션의 template 를통해서 입력합니다.
 * template에 매핑되어질 데이터의 형태는 배열이고 dataList 옵션을 통해서 입력하게 됩니다 현제 클릭되는 인덱스를 기반으로 노출하게 됩니다.
 *
 * @param opts
 * @constructor
 * @example
 *
 * const playerDetailBox = new DetailBox({
 *    $ctx:$('#wrap'),
 *    template:$.templates('#detailBoxTmpl'),
 *    dataList:playerInfoList // [{playerInfo},{playerInfo},...]
 * });
 *
 *
 */
const DetailBox = function(opts){
  // options
  this.opts = opts;

  // value setting - must need
  this.$ctx = opts.$ctx;
  this.listSelectName = opts.listSelectName || '.list-player';
  this.ItemSelectName = opts.ItemSelectName || 'li';
  this.detailSelectName = opts.detailSelectName || '.info-player';
  this.template = opts.template || '';
  this.dataList = opts.dataList || [];
  this.dataAttrPlayerRow = opts.dataAttrPlayerRow || 'data-player-row';
  this.chunkSize = opts.chunkSize || 3;
  this.detailBoxCloseSelector = opts.detailBoxCloseSelector || '.btn_close';

  // inner values
  this.$player = this.$ctx.find(this.listSelectName); //jquery list elem
  this.$playersItem = this.$player.find(this.ItemSelectName);//jquery list elem children
  this.$players = this.$playersItem.not(this.detailSelectName);// jquery list elem without detailHtmlString
  this.chunkedPlayers = this.chunk(this.$players, this.chunkSize);

  // initialize
  this.init();
};
/**
 * 배열 하나를 지정된 수만큼 잘라서 다시 배열을 만들어서 저장 즉 쪼개진 새로운 2중배열을 얻는 함수
 * @param list 덩어리로 나뉘어질 기본 배열
 * @param chunkSize 몇개를 기준으로 나눠어야 할지 설정
 * @returns {Array} 덩어리로 쪼개진 새로운 2중 배열 반환
 * @example
 * chunk([1,2,3,4,5],2) // [[1,2],[3,4],[5]]
 */
DetailBox.prototype.chunk = function(list, chunkSize){
  const length = list === null ? 0:list.length;
  let result = [];
  let tmp = [];
  let index = 0;

  while(index < length){
    tmp.push(list[index++]);
    if(tmp.length === chunkSize){
      result.push(tmp);
      tmp = [];
    }
  }
  if(tmp.length > 0){
    result.push(tmp);
  }

  return result;
};
/**
 * 선수목롱중 선수열의 정보를 기입해 주는 함수
 * 기입 되어진 선수 열(Row)를 기준으로 세부 info 함수가 클릭시 작동되어짐
 * 실행시점은 모든 이벤트가 달리기 전에 init 해줄때 실행 필요 ( 이후 이 값을 기준으로 이벤트가 바인딩 되기 때문 )
 * @param chunkedList chunk 되어진 2중 배열
 * @param dataAttrName chunk 되어진 배열의 모든 아이탬들에게 청크의 인텍스를 data-{dataAttrName} 으로 세팅
 * @example
 * 2중 배열로 쪼개진 li 리스트가 있다고 가정핼때 모든 아이탬에
 * <li></li> => <li data-player-row="0"></li>
 * <li></li> => <li data-player-row="0"></li>
 * <li></li> => <li data-player-row="0"></li>
 * <li></li> => <li data-player-row="1"></li>
 * <li></li> => <li data-player-row="1"></li>
 * <li></li> => <li data-player-row="1"></li>...
 * 값음 1차 배열의 인덱스를 따라갑니다.
 */
DetailBox.prototype.setDataAttr = function(chunkedList, dataAttrName){
  chunkedList.forEach(function(eachRowList, rowIdx){
    eachRowList.forEach(function(item){
      item.setAttribute(dataAttrName, rowIdx);
    });
  });
};
/**
 * 상세정보 보여주기의 이벤트 집합 함수 ( 선수 클릭시 토글 형식으로 선수들의 정보를 보여주는 역할을 합니다. )
 * setDataAttr 로 박혀진 data-attr 를 확인하여 해당하는 엘리먼트가 가지고 있는 row idx 를 찾습니다.
 * 그리고 그열의 마지막 아이탬 뒤에 상세박스를 동적으로 그려서 랭딩해 줍니다.
 */
DetailBox.prototype.bindEvents = function(){
  const that = this;
  //박스 보여주
  that.$players.on('click', function(){
    const $this = $(this);
    const $playerInfo = that.$player.find(that.detailSelectName);
    const rowIdx = $this.data(that.dataAttrPlayerRow.replace('data-', ''));
    const $targetRow = that.$player.find('[' + that.dataAttrPlayerRow + '=\"' + rowIdx + '\"]');
    const targetElem = $targetRow[$targetRow.length - 1] || $targetRow[0];
    $playerInfo.remove();
    $(targetElem).after(that.template.render(that.dataList[$this.index()]));
  });
  //박스 닫기
  that.$player.on('click',that.detailBoxCloseSelector, function(){
    const $playerInfo = that.$player.find(that.detailSelectName);
    $playerInfo.remove();
  });
};
/**
 * 초기화 시켜주는 함수
 * 이벤트가 dataAttr 여부로 동작하기에 반드시 setDataAttr 을 먼저 실행 시켜주어야 합니다.
 * 초기화는 내부적으로 작동안하고 생성 후 init() 함수를 실행시킴으로써 적용됩니다.
 */
DetailBox.prototype.init = function(){
  this.setDataAttr(this.chunkedPlayers, this.dataAttrPlayerRow);
  this.bindEvents();
};
/**
 * 더미데이터를 통한 테스트
 */
const playerInfoList = [];
const playerInfo = {
  name:'손흥민',
  fcName:'토트넘 핫스퍼FC',
  fcLink:'javascript:;',
  moreLink:'javascript:;',
  position:'공격수(FW)',
  birth:'1980년 생, 만 37세',
  recordLink:'javascript:;',
  imgSrc:'https://dummyimage.com/60x40/efefef/000000',
  recordGame:21,
  recordGoal:5,
  recordAssist:3,
  recordFoul:20
};
for(let i = 0; i < 12; i++){
  playerInfoList.push(Object.assign({ idx:i }, playerInfo));
}

/**
 * 상세정보 보기 인스턴스 생성 및 사용 예제
 * @type {DetailBox}
 */
const playerDetailBox = new DetailBox({
  $ctx:$('#wrap'),
  template:$.templates('#detailBoxTmpl'),
  dataList:playerInfoList
});

