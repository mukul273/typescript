//Public, Private & Readonly

class invoice {
  readonly client: string;
  details: string;
  //private details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invOne = new invoice('Chimp', 'Dumb service' , 273.00);
const invTwo = new invoice('Chimper', 'Dumber service' , 546.00);

//console.log(invOne, invTwo);

let invoices: invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });

//console.log(invoices);

invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount, inv.format());
})


const anchor = document.querySelector('a')!;

// if(anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children); // just displays all the children of the form


// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        //amount.value, // because this will automatically displays string value rather than number
        amount.valueAsNumber
      );
});
