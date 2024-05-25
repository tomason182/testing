function capitalize(string) {
    const stringToLowerCase = string.toLowerCase();
    
    return stringToLowerCase[0].toUpperCase() + stringToLowerCase.substring(1);
}

module.exports = capitalize;
