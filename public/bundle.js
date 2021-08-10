/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_js__ = __webpack_require__(2);
// inside of the curly bracelets, you can import the function

// you need to use the default method out of curly bracelets



console.log('hello');
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* square */](4));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */](2,3))
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* default */](5,3));

console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["c" /* isAdult */](15));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["c" /* isAdult */](23));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canDrink */](12));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canDrink */](41));

// you can change the naming of default imported methods.
// it is 'isSenior' in the person.js
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* default */](41));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* default */](65));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subtract; });
console.log('in utils.js');

// we can write like this as well:
// export const square = (x) => x*x;
// like this, we do not need to export it again at the bottom
// if we want to declare the method as default
// we need to write like this:
// declare the subtract above the declaration of 'export default'
// then use
// export default subtract;
// expression to export it.
const square = (x) => x * x ;

const add = (a,b) => a + b ;

const subtract = (a, b) => a - b;

// this is not an object definition
// we need to put the references that we want to export

// if you want to describe an export const as a default one.
// you need to write 'as default' after the name of it
// you can do this to only one 



// what makes the default special!:
// you can call the default method with another name 
// (naming is not important for default methods)
// if there is one big method that has been using a lot
// assign that as default

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSenior; });
const isAdult = (x) => x >= 18 ? true : false
const canDrink = (x) => x >= 21 ? true : false
const isSenior = (x) => x >=65 ? true : false




/***/ })
/******/ ]);