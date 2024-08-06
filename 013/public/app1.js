"use strict";
//Public, Private & Readonly
class invoice1 {
    constructor() {
    }
}
format1();
{
    return `${this.client1} owes ${this.amount1} for ${this.details1}`;
}
const invOne1 = new invoice1('Chimp', 'Dumb service', 273.00);
const invTwo1 = new invoice1('Chimper', 'Dumber service', 546.00);
//console.log(invOne, invTwo);
let invoices1 = [];
invoices1.push(invOne1);
invoices1.push(invTwo1);
// invoices.push({ name: 'shaun' });
//console.log(invoices);
invoices1.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format1());
});
const anchor1 = document.querySelector('a');
// if(anchor) {
//   console.log(anchor.href);
// }
console.log(anchor1.href);
//const form = document.querySelector('form')!;
const form1 = document.querySelector('.new-item-form');
//console.log(form.children); // just displays all the children of the form
// inputs
const type1 = document.querySelector('#type');
const tofrom1 = document.querySelector('#tofrom');
const details1 = document.querySelector('#details');
const amount1 = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type1.value, tofrom1.value, details1.value, 
    //amount.value, // because this will automatically displays string value rather than number
    amount1.valueAsNumber);
});
