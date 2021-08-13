"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AddOption = require("./components/AddOption");

var _AddOption2 = _interopRequireDefault(_AddOption);

var _Options = require("./components/Options");

var _Options2 = _interopRequireDefault(_Options);

var _Header = require("./components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Action = require("./components/Action");

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // // for string validations
// import validator from "validator";


// component state: manipulating the data and 
// component is going to take care the rest itself
// we do not need to write and call a function again and again 
// to reflect after each changes in tha data

// we need to set a default state object
// change the default state based on event - updating
// you can think like it will be new default
// component re-rendered using the new state values
// start again from change data step (updating)

// const obj = {
//   name: 'Vikram',
//   getName() {
//     return this.name;
//   }
// };
// // you can write the object name or directly whatever you want to use 
// // inside of the bind function as like .bind( {name: 'Yekta'} )
// const getName = obj.getName.bind(obj);

// console.log(getName());

// creating React component
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

    _this.state = {
      // after writing the defaultProps for IndecisionApp
      // we need to change inside of state
      // from
      // options : []
      // to
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        // Do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('component will unmount');
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      // this.setState(() => {
      //   return {
      //     options: []
      //   }
      // })

      // instead of above, we can write it like this:
      // if the function will return an object,
      // envelope the function return with ()
      // like this:  () => ({ return value here })  

      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      // this.setState((prevState) => {
      //   return {
      //     // with concat you can merge two arrays together
      //     options: prevState.options.concat(option)
      //   };
      // });

      // conversion of the this.setState: 
      // no need to use 'return' part
      // because we are not doing something, we are just creating the object

      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      // you can remove the attribute from here when you 
      // declare it as default with defaultProps
      // const title = 'Indecision';
      var subtitle = 'Put your life in the hands of computer';

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, { subtitle: subtitle }),
        _react2.default.createElement(_Action2.default, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        _react2.default.createElement(_Options2.default, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        _react2.default.createElement(_AddOption2.default, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(_react2.default.Component);

// stateless functional component - presentational components
// they are allowing us to use props
// stateless functional components are faster than class based components
// render() function is not needed in stateless functional components
// do not forget to add 'props' to the function
// you can create like this: const User = function() {}
// or

// const User = (props) => {
//   return(
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

_reactDom2.default.render(_react2.default.createElement(IndecisionApp, null), document.getElementById('app'));

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
