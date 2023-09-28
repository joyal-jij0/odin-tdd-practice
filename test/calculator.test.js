const calculator = require('../codes/calculator');

test('calculator', () =>{
    expect(calculator.add(2,2)).toBe(4);
    expect(calculator.sub(2,2)).toBe(0);
    expect(calculator.multiply(2,2)).toBe(4);
    expect(calculator.divide(2,2)).toBe(1);
})