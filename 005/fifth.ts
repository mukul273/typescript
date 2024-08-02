let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('Chimper');
mixed.push(false);
mixed.push(20);
console.log(mixed);


let uid: string|number;
uid = 'Chimper',
uid=20;
//uid = false;

console.log(uid);

// objects
let ninjaOne: object;
ninjaOne = { name: 'Chimp yoshi', age: 30 };

console.log(ninjaOne);

ninjaOne: [];
ninjaOne = ["Chimper Ding"];

console.log(ninjaOne);
let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string,
  skills?: string
};

ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };

console.log(ninjaTwo);