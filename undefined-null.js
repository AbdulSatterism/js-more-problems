/*
undefined ------->
1.variable value not assigned 
2. function but didn't write return value
3.just wrote return but didn't return value
4.parameter didn't pass
5.property that doesn't exist in an array
6.accessing array element out of range 
7. accessing delete array element
8.explicitly value set undefined

null--------->
1. null mean there is no value 
*/

let first;
// console.log(first)
function second(x, y) {
    const sum = x + y;
}
const result = second(3, 56);
// console.log(result)
function add(a, b) {
    const sum = a + b;
    return
}

const result2 = add(12, 45);
// console.log(result2)
function double(n, m) {
    const res = n * m;
    // console.log(n, m);
    return res;
}
double(25)

const five = { name: 'Sogir', age: 12, location: 'Bandarban' };
// console.log(five.address);

const six = [12, 45, 7, 5];
// console.log(six[5])
// delete six[2];
// console.log(six)

// null ---------->
const myObj = { name: 'samad', profession: null }