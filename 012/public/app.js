"use strict";
//Classes
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new invoice('Chimp', 'Dumb', 273.00);
const invTwo = new invoice('Chimper', 'Dumber', 546.00);
console.log(invOne, invTwo);
const anchor = document.querySelector('a');
// if(anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//console.log(form.children); // just displays all the children of the form
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, 
    //amount.value, // because this will automatically displays string value rather than number
    amount.valueAsNumber);
});
