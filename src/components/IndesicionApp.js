import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

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
export default class IndecisionApp extends React.Component {
  state = {
    // after writing the defaultProps for IndecisionApp
    // we need to change inside of state
    // from
    // options : []
    // to
    options: []
  };

  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // })

    // instead of above, we can write it like this:
    // if the function will return an object,
    // envelope the function return with ()
    // like this:  () => ({ return value here })  

    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {
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

    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
  };

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    // you can remove the attribute from here when you 
    // declare it as default with defaultProps
    // const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';

    return ( 
      <div>
        {/* if you want to use default title,
        you do not need to pass title attribute in here
        so, this line
        <Header title={title} subtitle={subtitle} />
        will be like this: */}
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}


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
