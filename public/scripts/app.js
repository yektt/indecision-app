'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// inside of the curly bracelets, you can import the function

// you need to use the default method out of curly bracelets
console.log('hello');
console.log((0, _utils.square)(4));
console.log((0, _utils.add)(2, 3));
console.log((0, _utils2.default)(5, 3));

console.log((0, _person.isAdult)(15));
console.log((0, _person.isAdult)(23));
console.log((0, _person.canDrink)(12));
console.log((0, _person.canDrink)(41));
console.log((0, _person2.default)(41));
console.log((0, _person2.default)(65));
