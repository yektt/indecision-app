// // for string validations
// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndesicionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `hi, my name is ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const greet = oldSyntax.getGreeting;
console.log(greet());

// -------

class NewSyntax {
  name = 'Jen';

  getGreeting = () => {
    return `hi, my name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const greet2 = newSyntax.getGreeting;
console.log(greet2());
