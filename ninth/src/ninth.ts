//Alias demo

type StringOrNum = string | number;

// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of${uid}`);
// }

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string,  uid: StringOrNum,}) => {
  console.log(`${user.name} has a uid of ${user.uid}`);
}