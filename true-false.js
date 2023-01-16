/*
falsy:
false , -value, '' , 0,undefine, null, NaN,
--------------------------------------
true:
true , +value, ' ', '0', string ,[],{}


undefined:
let x;

NaN:
let x = parseInt('ok')

*/

// const x = false;
// const x = true;
// const x = 4;
// const x = -4;
// const x = 0; is falsee
// const x = 'Khan Dhan'
// const x = ''
// let x;
// let x = null;
// let x = [];
// let x = {};
// let x = parseInt('ok')
// console.log('value of ', x)
if (x) {
    console.log('variable is truthy')
}
else {
    console.log('variable is false')
}