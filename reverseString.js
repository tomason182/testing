function reverseString(string) {
    if(typeof string !== string) {
        throw new error ('The input need to be a string type')
    }
    return string.split('').reverse().join('');
}

module.exports = reverseString;


console.log(reverseString(234));
