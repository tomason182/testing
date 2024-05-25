function reverseString(string) {
    if(typeof string !== 'string') {
        throw new Error ('The input needs to be of string type')
    }
    return string.split('').reverse().join('');
}


module.exports = reverseString;
