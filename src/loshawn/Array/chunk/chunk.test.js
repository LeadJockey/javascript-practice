const chunk = require('./index');

const testList = [
	{
		given:[[1, 2, 3, 4], 2],
		expected:[[1, 2], [3, 4]],
		method:'toEqual',
	},
	{
		given:[[1, 2, 3, 4], 5],
		expected:[[1, 2, 3, 4]],
		method:'toEqual',
	},
	{
		given:[[1, 2, 3, 4], 4],
		expected:[[1,2,3,4]],
		method:'toEqual',
	},
	{
		given:[[1, 2, 3, 4], 1],
		expected:[[1],[2],[3],[4]],
		method:'toEqual',
	},
];

testList.forEach((testcase) =>{
	const given = testcase.given;
	const expected = testcase.expected;
	const method = testcase.method;
	const desc = `given ${JSON.stringify(given)} / expected ${JSON.stringify(expected)}`;
	test(desc, () =>{
			expect(chunk(given[0],given[1]))[method](expected);
	});
});
