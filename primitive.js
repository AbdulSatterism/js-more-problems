// sevent data type in javascript
/*
primitive 
1. number 
2. string 
3. boolean 
4. undefine 
5. null
7.symbol

and non-primtive
6.object

*/

let a = 'hello';
let b = a;
// console.log(a, b);

a = 'gelo';
// console.log(a, b);

const x = { job: 'web developer' };
const y = x;
console.log(x, y)
// x.job = 'full stack develooper';
y.job = 'full stack develooper';
console.log(x, y)

