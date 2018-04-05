const tester = (testList) =>{
	
	testList.forEach((testcase) =>{
		const given = testcase.given;
		const expected = testcase.expected;
		const method = testcase.method;
		const desc = `given ${JSON.stringify(given)} / expected ${JSON.stringify(expected)}`;
		//명제 하나
		test(desc, () =>{
			//기대값과 결과값
			expect(given)[method](expected);
		});
	});
};

module.exports = tester;