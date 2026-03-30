const add = require('../src/add');

test('1 + 2는 4여야 한다', () => {
  expect(add(1, 2)).toBe(4);
});
