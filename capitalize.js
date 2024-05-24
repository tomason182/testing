function capitalize(string) {
    const stringToLowerCase = string.toLowerCase();
    
    return stringToLowerCase[0].toUpperCase();
}

module.exports = capitalize;