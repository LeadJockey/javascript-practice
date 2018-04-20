/**
 * 선수목록 리스트에서 선수의 썸내일을 클릭했을때 선수의 세부정보를 선수열(row)하단에 붙여서 노출해주는 모듈입니다.
 * option 값을 기입해 주어야 합니다
 *  생성자 함수 DetailBox 에서 // value setting - must need 이쪽 주석 부분을 참고 하시고 채워주세요
 *
 * 박스를 그려주는 방식은 jsRender 를 사용합니다.
 * jsRender 는 스크립트 기반으로 지정된 하나의 template 를 id 기준으로 잡아서 붙혀주는 역할을 하고 data를 옵션값으로 넘길수 있습니다.
 * 따라서 상세 박스에 들어갈 정보는 해당 데이터를 통해서 커스터 마이징 하면 되겠습니다.
 * 상세 박스의 데이터 값을 바꿀수 있도록 커스텀 함수를 빼 놓았습니다. setDetailData() 매서드에 함수를 기입하여 데이터를 컨버팅 해서 반환해주세요.
 *
 * @param opts
 * @constructor
 * @example
 *
 * const playerDetailBox = new DetailBox({
 *    $ctx:$('#wrap'),
 *    detailHtmlString:'<li class="info-player"><div class="box-player">선수정보</div></li>'
 * });
 *
 * playerDetailBox.init();
 */
const DetailBox = function(opts){
  // options
  this.opts = opts;

  // value setting - must need
  this.$ctx = opts.$ctx;
  this.listSelectName = opts.listSelectName || '.list-player';
  this.ItemSelectName = opts.ItemSelectName || 'li';
  this.detailSelectName = opts.detailSelectName || '.info-player';
  this.detailHtmlString = opts.detailHtmlString || '<div>noting to show</div>'; //임시
  this.dataAttrPlayerRow = opts.dataAttrPlayerRow || 'data-player-row';
  this.chunkSize = opts.chunkSize || 3;

  // inner values
  this.$player = this.$ctx.find(this.listSelectName); //jquery list elem
  this.$playersItem = this.$player.find(this.ItemSelectName);//jquery list elem children
  this.$players = this.$playersItem.not(this.detailSelectName);// jquery list elem without detailHtmlString
  this.chunkedPlayers = this.chunk(this.$players, this.chunkSize);
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
 * 박스를 그려주는 방식은 jsRender 를 사용합니다.
 * jsRender 는 스크립트 기반으로 지정된 하나의 template 를 id 기준으로 잡아서 붙혀주는 역할을 하고 data를 옵션값으로 넘길수 있습니다.
 * 따라서 상세 박스에 들어갈 정보는 해당 데이터를 통해서 커스터 마이징 하면 되겠습니다.
 * 상세 박스의 데이터 값을 바꿀수 있도록 커스텀 함수를 빼 놓았습니다. setDetailData() 매서드에 함수를 기입하여 데이터를 컨버팅 해서 반환해주세요.
 * @param templateId
 * @param data
 */
DetailBox.prototype.setDetailData = function(templateId, data){
  //some code
};
/**
 * 상세정보 보여주기의 이벤트 집합 함수 ( 선수 클릭시 토글 형식으로 선수들의 정보를 보여주는 역할을 합니다. )
 * setDataAttr 로 박혀진 data-attr 를 확인하여 해당하는 엘리먼트가 가지고 있는 row idx 를 찾습니다.
 * 그리고 그열의 마지막 아이탬 뒤에 상세박스를 동적으로 그려서 랭딩해 줍니다.
 */
DetailBox.prototype.bindEvents = function(){
  const that = this;
  that.$players.on('click', function(){
    const $playerInfo = that.$player.find(that.detailSelectName);
    const rowIdx = $(this).data(that.dataAttrPlayerRow.replace('data-',''));
    const $targetRow = that.$player.find('[' + that.dataAttrPlayerRow + '=\"' + rowIdx + '\"]');
    const targetElem = $targetRow[$targetRow.length - 1] || $targetRow[0];
    $playerInfo.remove();
    $(targetElem).after(that.detailHtmlString.replace('선수정보','선수번호:'+$(this).index()));
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
 * 상세정보 보기 인스턴스 생성 및 사용 예제
 * @type {DetailBox}
 */
const playerDetailBox = new DetailBox({
  $ctx:$('#wrap'),
  detailHtmlString:'<li class="info-player"><div class="box-player">선수정보</div></li>'
});

// 실행 및 초기화
playerDetailBox.init();
