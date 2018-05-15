(function(){
  'use strict';

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
    onSuccess:(response)=>{console.log(response);},
    onFail:(status)=>{console.error(status);}
  });

  // json wrapping 해봅시다 jsonp
  const script = document.createElement('script');
  script.src = 'reqURl'; //네이버 jsonp 가져와 보기
  document.body.append(script);



})();