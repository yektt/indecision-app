// // for string validations
// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndesicionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// -------

class NewSyntax {
  name = 'Jen';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);