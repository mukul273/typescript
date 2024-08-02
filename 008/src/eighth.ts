let greet: Function = () => {
  console.log('hello, world');
}

console.log(greet);
//This is not allowed
//greet = 'hello';

greet = () => {
  console.log('hello, again');
}

greet();

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  }
  
  add(5, 10, 'ninja');

  //Explicitely setting the return type rathan than letting TS decide
  const minus = (a: number, b: number): number => {
    return a + b;
  }
  
  let result = minus(10,7);
  console.log(result);