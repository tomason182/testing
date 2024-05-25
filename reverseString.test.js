const reverseString = require('./reverseString');


test ('testing should return gnitset', () => {
    expect(reverseString('testing')).toBe('gnitset');
});

test ('testing sentences' , () => {
    expect (reverseString('this is a sencence')).toBe('ecnecnes a si siht');
})

test ('testing non string type', () =>{
    expect(() => reverseString(123)).toThrow('The input needs to be of string type');
});