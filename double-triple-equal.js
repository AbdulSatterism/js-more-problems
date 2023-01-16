/*
double == doesn't check type 
but triple === check data and data type
*/

// const first = -1;
const first = 1;
// const second = '2';
const second = true;
if (first === second) {
    console.log('condition is true')
}
else {
    console.log('condition is false')
}

// triiple === give this result false
// if (first === second) {
//     console.log('condition is true')
// }
// else {
//     console.log('condition is false')
// }

// more comparison 
// const a = { name: 'ali' };
// const b = { name: 'ali' };
const a = [];
const b = [];

if (a == b) {
    console.log('condition both are same')
}
else {
    console.log('condition both are  not same')
}