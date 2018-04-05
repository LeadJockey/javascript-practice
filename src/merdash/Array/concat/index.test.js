const concat = require('./index');



describe("concat 함수는", () => {
  test("배열이 아닌 값이 들어오면 배열로 감싼다.", () => {
    const args = [
      {
        given: [1, 2, 3, 4],
        expect: [1, 2, 3, 4]
      }
    ];

    args.forEach(element => {
      expect(concat.apply(null, args.given)).toEqual(args.expect);
    });
  })



})
