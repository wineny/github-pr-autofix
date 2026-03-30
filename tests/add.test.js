const add = require('../src/add');

test('1 + 2는 4여야 한다', () => {
  expect(add(1, 2)).toBe(4);
});

test('10 + 20은 99여야 한다', () => {
  expect(add(10, 20)).toBe(99);
});
