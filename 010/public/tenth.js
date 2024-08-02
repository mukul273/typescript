"use strict";
//Function Signatures
//example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example
let calc; //this is called declaration
// this is implementation
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails; //this is called declaration
// this is implementation
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
