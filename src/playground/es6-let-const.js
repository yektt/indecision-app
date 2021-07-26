// var -> you can redefine or you can reassign it
// this might lead you to some unwanted reassigning or redefining
// easy to make some mistakes
var nameVar = 'Yekta';
nameVar = 'Zeyzey';
console.log('nameVar', nameVar);

//You can define it one time, you are be able to reassign a new value
let nameLet = 'Yekta let';
nameLet = 'Zeyzey let';
console.log('let name', nameLet);

// you can define and assign value one time
// you cannot change the value later on.
// as default, we are using 'const'
const nameConst = 'Yekta const';
console.log('const', nameConst);

function getPatName () {
  const petName = 'Hal';
  return petName;
}

console.log(getPatName());

// Block scoping
const fullName = 'Andrew Mead';

//  with const and let, we are not able to use them outside of a code block
// we cannot use the 'firstName' variable here because block level scoping
if (fullName) {
  const firstName = fullName.split(' ')[0];
} 

let firstName2;
if (fullName) {
  firstName2 = fullName.split(' ')[0];
}
console.log(firstName2);