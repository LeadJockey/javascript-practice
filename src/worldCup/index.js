
var WouldCup = function (opts) {
	this.opts     = opts || {};
	this.members  = opts.members || [];
	this.btnLeft  = opts.btnLeft;
	this.btnRight = opts.btnRight;
	this.init();
};

WouldCup.prototype.clone      = function () {
	this.currentMembers = this.members.slice(0);
	return this;
};
WouldCup.prototype.shuffle    = function () {
	var swapIdx, tmp, i,
			shuffledList = this.currentMembers,
			length       = shuffledList.length - 1;
	for (i = length; i > 0; i--) {
		swapIdx               = Math.floor(Math.random() * (i + 1));
		tmp                   = shuffledList[i];
		shuffledList[i]       = shuffledList[swapIdx];
		shuffledList[swapIdx] = tmp;
	}
	this.currentMembers = shuffledList;
	return this;
};
WouldCup.prototype.nominate   = function (cnt) {
	var currentMembers    = this.currentMembers;
	this.nominatedMembers = currentMembers.slice(0, cnt);
	this.currentMembers   = currentMembers.slice(cnt);
	return this;
};
WouldCup.prototype.pick       = function (key) {
	var keyMap = {'left': 0, 'right': 1};
	var keyIdx = keyMap[key];
	console.log('picked : ', [this.nominatedMembers[keyIdx]]);
	this.currentMembers.push(this.nominatedMembers[keyIdx]);
	return this;
};
WouldCup.prototype.hasResult  = function () {
	if (this.currentMembers.length < 2) {
		console.log('your winner : ', this.currentMembers);
		return true;
	}
	return false;
};
WouldCup.prototype.bindEvents = function () {
	var that = this;
	that.btnLeft.addEventListener('click', function () {
		if (that.hasResult()) {
			return false;
		}
		var result = that.pick('left').nominate(2);
		// console.log(result.currentMembers);
		console.log('pick one : ', result.nominatedMembers);
		
	});
	that.btnRight.addEventListener('click', function () {
		if (that.hasResult()) {
			return false;
		}
		var result = that.pick('right').nominate(2);
		// console.log(result.currentMembers);
		console.log('pick one : ', result.nominatedMembers);
	});
};
WouldCup.prototype.init       = function () {
	var gameList = this.clone().shuffle();
	console.log('game initialized');
	console.log('gameList : ', gameList.currentMembers);
	console.log('pick one : ', gameList.nominate(2).nominatedMembers);
	this.bindEvents();
};

var WC = new WouldCup({
												members : ['윌리', '제프리', '션', '빵야', '멀린', '에드워드', '시혼', '우즈', '노엘', '딜런'],
												btnLeft : document.getElementById('btn-left'),
												btnRight: document.getElementById('btn-right')
											});



