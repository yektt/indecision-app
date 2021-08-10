'use strict';

var _utils = require('./utils.js');

var _person = require('./person.js');

// inside of the curly bracelets, you can import the function
console.log('hello');
console.log((0, _utils.square)(4));
console.log((0, _utils.add)(2, 3));

console.log((0, _person.isAdult)(15));
console.log((0, _person.isAdult)(23));
console.log((0, _person.canDrink)(12));
console.log((0, _person.canDrink)(41));
