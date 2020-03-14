const _ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },
    inRange(number, start, end) {
        if (typeof end === 'undefined') {
            end = start;
            start = 0;
        } else if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        }

        let isInRange = false;
        if (start <= number && number < end) {
            isInRange = true;
        }

        return isInRange;
    },
    words(string) {
        const words = string.split(' ');

        return words;
    },
    pad(string, length) {
        if (length <= string) {
            return string;
        }

        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;
    },
    has(object, key) {
        const hasValue = object[key] !== undefined;

        return hasValue;
    },
    invert(object) {
        const invertedObject = {};
        for (const key in object) {
            const originalValue = object[key];
            invertedObject.originalValue = key;
        }

        return invertedObject;
    },
    findKey(object, predicate) {
        for (const key in object) {
            const value = object[key];
            const predicatedReturnValue = predicate(value);
            if (predicatedReturnValue) {
                return key;
            }
        }

        return undefined;
    },
    drop(array, n) {
        if (typeof n !== 'number' || n <= 0) {
            n = 1;
        }
        const droppedArray = array.slice(n, array.length);

        return droppedArray;
    },
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
        const droppedArray = this.drop(array, dropNumber);

        return droppedArray;
    },
    chunk(array, size) {
        if (size === undefined) {
            size = 1;
        }

        const arrayChunks = [];
        for (let index = 0; index < array.length; index += size) {
            const arrayChunk = array.slice(index, index + size);
            arrayChunks.push(arrayChunk);
        }

        return arrayChunks;
    }
};

module.exports = _;