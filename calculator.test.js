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