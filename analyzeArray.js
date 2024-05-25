const testArray = [1, 8, 3, 4, 2, 6];

function analyzeArray (array) {

    if (!Array.isArray(array)) {
        throw new Error ('Input is not a valid array');
    }

    let sum = 0;
    array.forEach((item) => {
        if (typeof item !== 'number') {
            throw new Error ('Array contains not only numbers');
        }
        sum += item;
    });

    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}


module.exports = analyzeArray;