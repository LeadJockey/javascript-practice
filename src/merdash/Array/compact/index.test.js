const compact = require('./index');


const arrArgs = [
  [[0, 1, false, 2, '', 3]]
]

describe("compact method", () => {
  test("잘못된 인자가 들어왔을 경우 에러를 내뱉는다.", () => {
    const badArgs = [
      [false],
      [1, 2, 3],
      ["a"]
    ]

    badArgs.forEach(arg => {
      expect(compact.bind(null, arg)).toThrow("인자는 배열이 들어와야 합니다. ")
    });

  });

  test("빈 인자가 들어오면 빈 배열을 내 뱉는다.", () => {

  });

  test("정상 배열이 들어왔을때 compact 역활을 수행한다.", () => {

  })


})