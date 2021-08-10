// inside of the curly bracelets, you can import the function

// you need to use the default method out of curly bracelets
import subtract,{ square, add } from './utils.js';
import { canDrink, isAdult } from './person.js';

console.log('hello');
console.log(square(4));
console.log(add(2,3))
console.log(subtract(5,3));

console.log(isAdult(15));
console.log(isAdult(23));
console.log(canDrink(12));
console.log(canDrink(41));