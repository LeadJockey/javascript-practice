const chunk = require('./index');

const testList = [
	{
		given   : [[1, 2, 3, 4], 2],
		expected: [[1, 2], [3, 4]]
	}
];
testList.forEach((testcase) => {
	const given    = testcase.given;
	const expected = testcase.expected;
	const desc     = `given ${JSON.stringify(given)} / expected ${JSON.stringify(expected)}`;
	test(desc, () => {
		expect(chunk(given[0], given[1])).toEqual(expected);
	});
});
