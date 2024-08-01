"use strict";
let greet = () => {
    console.log('hello, world');
};
console.log(greet);
//This is not allowed
//greet = 'hello';
greet = () => {
    console.log('hello, again');
};
greet();
const add = (a, b, c /*?*/ = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
//Explicitely setting the return type rathan than letting TS decide
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
