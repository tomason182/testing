const analyzeArray = require('./analyzeArray');

// Check object result

const desireResult = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
}

// test result of array.
test ('desire result', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(desireResult);
});

// Check for errors
test (('not an array'), () => {
    expect(() => analyzeArray(45)).toThrow('Input is not a valid array');
});

test (('not all numbers'), () => {
    expect(() => analyzeArray([5,6,"A","KI", 45])).toThrow('Array contains not only numbers')
})