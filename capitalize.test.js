const capitalize = require('./capitalize');

test ('should exits', () => {
    expect(capitalize('string')).toBeDefined();
});

test ('testing should return Testing', () => {
    expect(capitalize('testing')).toBe('Testing');
});

test ('TESTING should return Testing', () => {
    expect(capitalize('TESTING')).toBe('Testing');
})

test ('tesTing should return Testing', () => {
    expect(capitalize('tesTing')).toBe('Testing');
})