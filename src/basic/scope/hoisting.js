/*
* 호이스팅 특성
*
* 변수 선언문을 끌어 올린다는 뜻
*
* 다른 프로그래밍 언어의 경우 선언문 전에 호출 됐을 때 에러가 난다.
*
* 하지만 자바스크립트는 호이스팅으로 인해서 구동이 가능하다.
*
* 호이스팅이 이루어지게 되면 변수명이 같은 경우 전역변수보다도
*  지역변수를 먼저 참조 하게 된다.
*
* 여러가지 함수의 정의 방법중 함수 선언문 방식에서만 호이스팅이 가능하다.
*
*
* */
hoisting();

declareMyFunction();
// expressionMyFunction(); // not defined
function hoisting(){
  // console.log('value='+value); // value=undefined
  const value = 10;
  console.log('value='+value); // value=10
}


// 함수 선언문
function declareMyFunction(){
  return console.log('선언문 형식으로 만들어진 함수');
}

//함수 표현식
const expressionMyFunction = function(){
  return console.log('표현식 방식으로 만들어진 함수');
};
