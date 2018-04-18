const WouldCup = function (opts) {
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
	let swapIdx, tmp, i,
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
	const currentMembers    = this.currentMembers;
	this.nominatedMembers = currentMembers.slice(0, cnt);
	this.currentMembers   = currentMembers.slice(cnt);
	this.win();
	return this;
};
WouldCup.prototype.pick       = function (key) {
	const keyMap = {'left': 0, 'right': 1};
	const keyIdx = keyMap[key];
	this.currentMembers.push(this.nominatedMembers[keyIdx]);
	console.log('picked : ', [this.nominatedMembers[keyIdx]]);
	return this;
};
WouldCup.prototype.win        = function () {
	if (this.nominatedMembers.length === 1) {
		console.log('your winner : ', this.nominatedMembers);
		return this;
	}
};
WouldCup.prototype.bindEvents = function () {
	const that = this;
	that.btnLeft.addEventListener('click', function () {
		if (that.nominatedMembers.length < 2) {
			return false;
		}
		const nominateMembers = that.pick('left').nominate(2).nominatedMembers;
		if (nominateMembers.length === 2) {
			console.log('pick one : ', nominateMembers);
		}
	});
	that.btnRight.addEventListener('click', function () {
		if (that.nominatedMembers.length < 2) {
			return false;
		}
		const nominateMembers = that.pick('left').nominate(2).nominatedMembers;
		if (nominateMembers.length === 2) {
			console.log('pick one : ', nominateMembers);
		}
	});
};
WouldCup.prototype.init       = function () {
	const gameList = this.clone().shuffle();
	console.log('game initialized');
	console.log('gameList : ', gameList.currentMembers);
	console.log('pick one : ', gameList.nominate(2).nominatedMembers);
	this.bindEvents();
};