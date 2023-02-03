var main = require("./main");

test("Capitalize:happy path", () =>
  expect(main.capitalize("sad")).toMatch("Sad"));


test("Capitalize:empty", () =>
  expect(main.capitalize("")).toMatch(""));


  test("ReverseString: happy path", () =>
  expect(main.reverse("sad")).toMatch("das"));


  test("ReverseString: empty", () =>
  expect(main.reverse("")).toMatch(""));

  test("Calculator: happy path", () =>
  expect(main.calculator.add(1,2)).toBe(3));

  test("Calculator: happy path 2", () =>
  expect(main.calculator.subtract(1,2)).toBe(-1));

  test("Calculator: happy path 3", () =>
  expect(main.calculator.divide(1,2)).toBeCloseTo(0.5));

  test("Calculator: happy path 4", () =>
  expect(main.calculator.multiply(1,2)).toBe(2));

  test("caesarCipher: happy path", () =>
  expect(main.caesarCipher("sad",2)).toMatch("ucf"));

  test("caesarCipher: from z to a", () =>
  expect(main.caesarCipher("zac",3)).toMatch("cdf"));

  test("caesarCipher: the same case", () =>
  expect(main.caesarCipher("beef",0)).toMatch("beef"));
  
  test("caesarCipher: panctuation", () =>
  expect(main.caesarCipher("real,ly",5)).toMatch("wjfq,qd"));

  test("analyzeArray: happy path", () =>
  expect(main.analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  }));
  

  