const caesarCipher = require("./caesarCipher");

test ('all lowerCase', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test ('all upperCase', () => {
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test ('preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
