const difference = require('./index').difference;
const arrayItemRemoveByValue = require('./index').arrayItemRemoveByValue;
const filterArray = require('./index').filterArray;
const isValueExistInArray = require('./index').isValueExistInArray;




describe("filterArray", () => {

  test("인자중에 배열만 골라서 리턴한다.", () => {
    const badArgs = [
      {
        given: [[1, 2, 3], false, 1, 3],
        expected: [[1, 2, 3]]
      },
      {
        given: [[1, 2, 3], [2, 3, 4], 1, 3],
        expected: [[1, 2, 3], [2, 3, 4]]
      },
      {
        given: [false],
        expected: []
      },
    ];

    badArgs.forEach(arg => {
      expect(filterArray.apply(null, arg.given)).toEqual(arg.expected);
    })
  });
})

describe("arrayItemRemoveByValue", () => {
  test("해당 배열의 값을 제거한 배열을 리턴한다.", () => {
    const args = [
      {
        given: [[1, 2, 3], 1],
        expected: [2, 3]
      },
    ];

    args.forEach(arg => {
      expect(arrayItemRemoveByValue.apply(null, arg.given)).toEqual(arg.expected);
    })
  })
})

describe("isValueExistInArray", () => {
  test("해당 배열에 해당 값이 있으면 참을 내뱉는다. 그렇지 않으면 거짓", () => {
    const args = [
      {
        given: [[1, 2, 3], 1],
        expected: true
      },
      {
        given: [[1, 2, 3], 5],
        expected: false
      }
    ];

    args.forEach(arg => {
      expect(isValueExistInArray.apply(null, arg.given)).toEqual(arg.expected);
    })
  })
})





describe("difference 함수는", () => {


  test("인자를 빈 값을 넘기면 빈 배열이 반환된다.", () => {
    expect(difference.apply(null)).toEqual([]);
  });

  test("첫번째 인자에 배열이 아닌 인자를 넣으면 빈 배열이 반환된다.", () => {
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

  test("첫번째 인자에 배열인자 이후에 배열이 아닌 인자들이 왔을때는 첫번째 인자를 리턴한다. ", () => {
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

  test("첫번째 인자를 제외한 나머지 인자에서 배열이 들어오면 첫번째 배열 기준으로 difference가 진행된다.", () => {
    const badArgs = [
      {
        given: [[1, 2, 3], [2, 3]],
        expected: [1]
      },
    ];

    badArgs.forEach(arg => {
      expect(difference.apply(null, arg.given)).toEqual(arg.expected);
    })
  });

  // test("배열이 아닌 값은 무시하고 difference가 진행된다.", () => {

  // });

})