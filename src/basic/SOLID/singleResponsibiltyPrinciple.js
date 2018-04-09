/*
* 단일 책임 원칙
*
* 모든 클레스 (자바스크립트 함수) 는 반드시 단 한가지의 변경 사유만을 가진다.
* 쉽게 말하자면 한가지 일만 처리해야 한다는 것.
*
* 이 원칙이 중요한 이유 ?
*
* 1. 쉬운 테스트
* 2. 재사용성
* 3. 가독성
* 4. 유지보수성
*
* 이 원칙을 적용할 때 질문을 던져보자
*
* 1. 코드가 무엇을 하는지 파악하기
* 2. 하나 이상의 일을 하고 있는지 파악하기
*
* 
* 우리는 이제 유저에게 안녕하세요 "유저이름" 을 찍어주는 함수를 만들어야 한다고 가정해 보자.
* 대소문자 구분없는 문자열을 받아서 첫 글자는 대문자,
* 그리고 나머지는 모두 소문자로 만들어 주는 함수가 있다고 가정하자.
* 
* */


// 이러한 함수는 완젼히 통으로 짜여져서 유지보수하기 어렵고 가독성도 떨어진다.
var users = ['sHaWn', 'EdwarD', 'mErLin', 'BrAd'];

function greeter(users){
	return users.map(function(name){
		var userName = name.toLowerCase();
		return 'hi ' + userName.charAt(0).toUpperCase() + userName.slice(1);
	});
}
console.log(greeter(users));

// 한번 단일 책임 원칙을 생각하면서 리펙토링 해보자.

var Formater = function(){};
Formater.prototype.sentenceCase = function(string){
	var lowerCaseString = this.lowerCase(string);
	var capitalized = this.capitalize(lowerCaseString);
	return capitalized;
};
Formater.prototype.lowerCase = function(string){
	return string.toLowerCase();
};
Formater.prototype.capitalize = function(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
};

var Greeter = function(users, greetFormater){
	this.users = users;
	this.greetFormater = greetFormater;
};
Greeter.prototype.greet = function(){
	var that = this;
	var i=0;
	this.users.map(function(user){
		console.log(++i);
		var formattedUserName = that.greetFormater.sentenceCase(user);
		that.sendGreetingMsg(formattedUserName);
	});
};
Greeter.prototype.sendGreetingMsg = function(name){
	document.body.innerHTML += '<p>hi ' + name+'</p>';
};


var f = new Formater();
var eventGreeter = new Greeter(users, f);
eventGreeter.greet();
