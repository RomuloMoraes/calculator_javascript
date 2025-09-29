const { add } = require("../src/script");

const { sub } = require("../src/script");

test("add 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("sub 5 - 3 = 2", () => {
  expect(sub(5, 3)).toBe(2);
})
