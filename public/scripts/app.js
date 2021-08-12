"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // for string validations
// import validator from "validator";
var template = _react2.default.createElement(
  "p",
  null,
  "testing testing"
);
_reactDom2.default.render(template, document.getElementById('app'));

// ***** Import examples

// // inside of the curly bracelets, you can import the function

// // you need to use the default method out of curly bracelets
// import subtract,{ square, add } from './utils.js';
// import isSeniorCitizen, { canDrink, isAdult } from './person.js';

// console.log('hello');
// console.log(square(4));
// console.log(add(2,3))
// console.log(subtract(5,3));

// console.log(isAdult(15));
// console.log(isAdult(23));
// console.log(canDrink(12));
// console.log(canDrink(41));

// // you can change the naming of default imported methods.
// // it is 'isSenior' in the person.js
// console.log(isSeniorCitizen(41));
// console.log(isSeniorCitizen(65));

// ***** import examples finished
