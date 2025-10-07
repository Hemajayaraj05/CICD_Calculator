const { add, subtract, multiply, divide } = require('../src/calculator');

//positive test cases

test('adds 2+3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5-3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4*3 to equal 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divides 10/2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('dividing by zero throws error', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});

//negative test cases

test('add case should fail for 2 + 3 to equal 4', () => {
  expect(add(2, 3)).toBe(4);
});

test('subtracting 3 - 5 equals -2', () => {
  expect(subtract(3, 5)).toBe(-2);
});

test('multiply 5 * 0 equals 0', () => {
  expect(multiply(5, 0)).toBe(0);
});


test('divides -10 / 2 to equal -5', () => {
  expect(divide(-10, 2)).toBe(-5);
});


test('add with non-number input throws error', () => {
  expect(() => add(2, "a")).toThrow();
});

