const difference = require('./index');

describe("difference 함수는", () => {


  test("인자를 빈 값을 넘기면 빈 배열이 반환된다.", () => {
    expect(difference.apply(null)).toEqual([]);
  });

  test("첫번째 인자에 잘못된 인자를 넣어도 빈 배열이 반환된다.", () => {
    const badArgs = [
      {
        given: [false],
        expected: []
      },
      {
        given: [1],
        expected: []
      },
      {
        given: ["a"],
        expected: []
      },
      {
        given: [{ a: "1" }],
        expected: []
      },
    ];

    badArgs.forEach(arg => {
      expect(difference.apply(null, arg.given)).toEqual(arg.expected);
    })
  });

  test("첫번째 인자에 배열 , 두번째 인자이후에 잘못된 인자가 들어가면 첫변째 인자가 반환된다.", () => {
    const badArgs = [
      {
        given: [[1], false],
        expected: [1]
      },
      {
        given: [["a"], 1],
        expected: ["a"]
      },
      {
        given: [[true], "a"],
        expected: [true]
      },
      {
        given: [[{ mer: "lin" }], { a: "1" }],
        expected: [{ mer: "lin" }]
      },
    ];

    badArgs.forEach(arg => {
      expect(difference.apply(null, arg.given)).toEqual(arg.expected);
    });
  });

  // test("첫번째 인자를 제외한 나머지 인자에서 배열이 들어오면 첫번째 배열 기준으로 difference가 진행된다.", () => {

  // });

  // test("배열이 아닌 값은 무시하고 difference가 진행된다.", () => {

  // });


})