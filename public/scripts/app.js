'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('fetching data');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('saving data');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('component will unmount');
    }
  }, {
    key: 'handleDeleteOptions',
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
    key: 'handleDeleteOption',
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
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
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
    key: 'render',
    value: function render() {
      // you can remove the attribute from here when you 
      // declare it as default with defaultProps
      // const title = 'Indecision';
      var subtitle = 'Put your life in the hands of computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

// class Header extends React.Component{
//   // React.Component requires one method define : 'render'
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// converting Header class to the stateless function component

// setting up a default value for props values (class based or function based components)
var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

// this is an object
// it can be override in other components
Header.defaultProps = {
  title: 'Indesicion'
};

// class Action extends React.Component {

//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }
// how we can convert Action class to the Action stateless function component:

// we do not have access to the 'this'
// when you convert your class component to stateless,
// do not forget to check 'this' and remove them
// do not forget to pass down 'props' on the stateless function
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

// class Options extends React.Component {
//   // for efficiency, we set up the binding in constructor method instead of 
//   // setting it up in the render 

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//         {
//           // key is a special reserved name, it won't be available in Option component
//           this.props.options.map((option) => <Option key={option} optionText={option}/>)
//         }
//       </div>
//     );
//   }
// } 

// converting the Options class to the stateless function component

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove all'
    ),

    // key is a special reserved name, it won't be available in Option component
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

// converting Option class to the stateless function component
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  // for sending data from child to parent
  // you should add constructor method and bind the method again
  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

    _this2.state = {
      error: undefined
    };
    return _this2;
  }
  // class method
  // something that is contained inside of the class
  // other classes do not this method to run


  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      if (error) console.log(error);

      // this.setState(() => {
      //   return {
      //     error
      //   };
      // });

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error,
          ' '
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
