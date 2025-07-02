const { getPrimes } = require("./index");

describe("getPrimes", () => {
  it("should return prime numbers between 1 and 10", () => {
    expect(getPrimes(1, 10)).toEqual([2, 3, 5, 7]);
  });
});
