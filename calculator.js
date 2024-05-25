const calculator = {
    add (a, b) {
        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error ('Both a or b are not numbers');
        }

        return a + b;
    },

    subtract (a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error ('Both a or b are not numbers');
        }

        return a - b;
    },

    divide (a, b) {

        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error ('Both a or b are not numbers');
        }

        if (b === 0) {
            throw Error('Division by Zero error');
        }

        return a / b;
    },

    multiply (a, b) {
        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error ('Both a or b are not numbers');
        }

        return a * b;
    }
}