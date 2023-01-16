// find even number in an Array
/*
function findEvenNumber(array) {
    let count = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 == 0) {
            count.push(element)
        }

    }
    return count;
}
const array = [12, 13, 14, 15, 16, 19, 16, 17, 18];
const result = findEvenNumber(array);
console.log(result)
*/

// find odd number in an array

function findEvenNumber(array) {
    let count = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 2 != 0) {
            count.push(element)
        }

    }
    return count;
}
const array = [12, 13, 14, 15, 16, 19, 16, 17, 18];
const result = findEvenNumber(array);
console.log(result)