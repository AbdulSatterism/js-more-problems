const array = ['rohim', 'korim', 'jolil', 'holil', 'rohim', 'korim', 'jolil', 'holil'];
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 4, 5, 6, 1, 2, 3, 1, 10]

function duplicateName(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique
}

const uniqueName = duplicateName(array);
console.log("Without duplicate name here: ", uniqueName);