(function(){
  'use strict';

  // ajax 의 이해
  const getJSON = (opts) =>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          opts.onSuccess(JSON.parse(xhr.responseText));
        }else{
          opts.onFail(xhr.status);
        }
      }
    };
    xhr.open('GET', opts.url, true);
    xhr.send();
    return xhr;
  };

  getJSON({
    url:'https://5afa8446edf5520014cbd375.mockapi.io/mock/book',
    onSuccess:(response) =>{console.log(response);},
    onFail:(status) =>{console.error(status);}
  });

  //json wrapping 해봅시다 jsonp
  // 네이버의 서제스트는 jsonp 이루어져 있습니다.
  const script = document.createElement('script');
  const protocol = 'https://';
  const domain = 'ac.search.naver.com';
  const path = ['', 'nx', 'ac'];
  const param = {
    _callback:'window.__jindo_callback._$3361_0',
    q:'ss',
    q_enc:'UTF-8',
    st:100,
    frm:'nv',
    r_format:'json',
    r_enc:'UTF-8',
    r_unicode:0,
    t_koreng:1,
    ans:2,
    run:2,
    rev:4,
    con:1
  };

  function objectLooper(obj){
    let results = [];
    for(let prop in obj){
      if(obj.hasOwnProperty(prop)){
        results.push(prop + "=" + obj[prop]);
      }
    }
    return results;
  }

  window.__jindo_callback = {}; // 네이버 전역 객체 추가 (확인용)
  window.__jindo_callback._$3361_0 = function(){}; // 네이버 서제스트 콜백 추가 (확인용)
  const reqURI = protocol + domain + path.join('/') + '?' + objectLooper(param).join('&');
  console.log(reqURI);
  script.src = reqURI;
  document.body.append(script); // 개발자 도구 network -> response 돌려보면 값이 나온다


  // C.O.R.S
  // naver.com 에서 password 를 뽑아내는 악성 스크립트를 짜보자 - naver console 에서 해보기
  function getPassword(){
    const pw = document.getElementById('pw');
    pw.oninput = function(){return console.log(this.value)}; // 사용자가 비밀번호를 칠때마다 콘솔로 문자열 노출
  }

  // 이러한 이유에서 다른 도메인에서 데이터를 가져가는 것을 막는다.
})();