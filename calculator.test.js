const calculator = require('./calculator');

test ('sum', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test ('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test ('multiply', () => {
    expect (calculator.multiply(4, 3)).toBe(12);
})

test ('divide', () => {
    expect (calculator. divide(8, 2)).toBe(4);
})

// Handle errors.

test('sum num and string', () => {
    expect(() => calculator.add(2, 'abc')).toThrow('Both a or b are not numbers');
});

test('subtract num and string', () => {
    expect(() => calculator.subtract(2, 'abc')).toThrow('Both a or b are not numbers');
});

test('multiply num and string', () => {
    expect(() => calculator.multiply(2, 'abc')).toThrow('Both a or b are not numbers');
});

test('divide num and string', () => {
    expect(() => calculator.divide(2, 'abc')).toThrow('Both a or b are not numbers');
});

// Division by Zero error handle

test('zero division', () => {
    expect(() => calculator.divide(4, 0)).toThrow('Division by Zero error');
});