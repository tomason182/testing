// pseudo-code:
// 1. Loop throw every character of the string.
// 2. Determine if the current character is alphabetical.
// 3. If character is alphabetical check if is upperCase or loweCase.
// 4. If character is upperCase 
// 4. Join the new string.

function cesarCipher(string, code) {
    const cipheredString = [];
    const regex = /[a-zA-Z]/;

    if (typeof code !== 'number') {
        throw new Error ('Cipher code should be a number');
    }

    for (let i = 0; i < string.length; i ++) {
        const char = string.charAt(i);

        if (regex.test(char)) {
            const isUpperCase = char === char.toUpperCase(); 
            const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            const charCode = char.charCodeAt(0);
            let newIndex = (charCode - base + code);
            if (newIndex < 0) {
                newIndex += 26;
            }
            cipheredString.push(String.fromCharCode(base + newIndex));
        } else {
            cipheredString.push(char);
        }
    }
    return cipheredString.join('');
}