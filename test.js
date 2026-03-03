// 1. Import the 'add' function from our index.js file
const add = require('./index');

// 2. Write a test case: We expect 1 + 2 to equal 3
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
