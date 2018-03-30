const sum = (a, b) => {
	if (!(Number.isInteger(a) && Number.isInteger(b))) {
		return;
	}
	return a + b;
};

module.exports = sum;