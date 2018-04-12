const concat = require('./index');



describe("concat 함수는", () => {
  test("배열이 아닌 값이 들어오면 배열로 감싼다.", () => {
    const args = [
      {
        given: [1, 2, 3, 4],
        expect: [1, 2, 3, 4]
      },
      {
        given: [2, 3],
        expect: [2, 3]
      }
    ];

    args.forEach(element => {
      expect(concat.apply(null, element.given)).toEqual(element.expect);
    });
  })

  test("첫번째 인자만 배열이 들어오면 그 배열 그대로 내뱉는다.", () => {
    const args = [
      {
        given: [[1, 2, 3, 4]],
        expect: [1, 2, 3, 4]
      }
    ];

    args.forEach(element => {
      expect(concat.apply(null, element.given)).toEqual(element.expect);
    });
  })

  test("모든 인자에 대해서 concat을 진행한다.", () => {
    const args = [
      {
        given: [[1, 2, 3, 4], ['a', 'b']],
        expect: [1, 2, 3, 4, 'a', 'b']
      }
    ];

    args.forEach(element => {
      expect(concat.apply(null, element.given)).toEqual(element.expect);
    });
  })

})