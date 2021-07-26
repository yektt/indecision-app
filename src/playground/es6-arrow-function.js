// arrow function

// es5 function
function square (x) {
  return x * x;
};
console.log(square(3));

// es6 arrow function
// first put your function variables
// later put your arrow and open curly bracelets
// finally, write your function inside of the curly bracelets
// all arrow functions are anonymous, that means you cannot give a name to them
const squareArrow = (x) => {
  return x * x;
};

// if the arrow function has one statement, we can write it like this:
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(4));


// challenge part
const fullName = 'Mike Smith'

const getFirstNameArrow = (x) => {
  return x.split(' ')[0];
};
console.log(getFirstNameArrow(fullName));

const getFirstName = (x) => x.split(' ')[0];

console.log(getFirstName(fullName));