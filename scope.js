// it's call local scope
// function add(first, second) {
//     const result = first + second;
//     console.log(result)
//     return result
// }
// const sum = add(12, 15);

const favNum = 27; //it's global variable
function add(first, second) {
    const result = first + second;
    // console.log(result)
    // console.log(favNum)
    return result
}
const sum = add(5, 15);

// block scope 

function add(first, second) {
    const result = first + second;
    if (result > 10) {
        // let mood = 'Happy'; //let or const it's block scope variable
        // console.log(mood)
        var mood = 'Happy';
        // console.log(mood)
    }
    // console.log(mood)
}
const summ = add(5);


// for (var i = 0; i <= 10; i++) {

// }
// console.log(i) // leaking value it's make global variable
for (let i = 0; i <= 10; i++) {

}
console.log(i)