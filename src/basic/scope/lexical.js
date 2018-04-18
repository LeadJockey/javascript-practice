/*
* 렉시컬 특성
*
* 함수 실행시 스코프를 실행환경이 아닌 정의 환경으로 참조하는 특성
* F1 함수 내부에서 F4 함수를 호출했다고 해서 F4가 F1 안에 들어와있는 것처럼
* 변수 a 를 참조할 수 없다.
*
* */

function F1(){
  const a = 10;
  F2();
  F3(a);
  // F4();
}

function F2(){
  return console.log('F2 called');
}

function F3(a){
  return console.log(a);
}

function F4(){
  return console.log(a);
}

F1(); // F2 called, 10, a is not defined


