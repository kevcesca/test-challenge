const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    //
    expect(calculator.sum(10, 5)).toBe(15);
})

test('substracts a - b', () => {
   //
    expect(calculator.substract(10, 5)).toBe(5);
})

test('multiplies a * b', () => {
    //
    expect(calculator.multiply(10, 5)).toBe(50);
})

test('divides a / b', () => {
    // Consider decimals
    expect(calculator.divide(10, 5)).toBe(2);
})

test('Raises to power a ^ b', () => {
    //
    expect(calculator.power(10, 5)).toBe(100000);
})

