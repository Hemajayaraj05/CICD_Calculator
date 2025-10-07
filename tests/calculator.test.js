const { add, subtract, multiply, divide } = require('../src/calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 3 to equal 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('dividing by zero throws error', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});