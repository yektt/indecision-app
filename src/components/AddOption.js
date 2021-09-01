import React from "react";

// for class definition, export class can be placed at the beginning
export default class AddOption extends React.Component {
  // for sending data from child to parent
  // you should add constructor method and bind the method again
  state = {
    error: undefined
  };

  // class method
  // something that is contained inside of the class
  // other classes do not this method to run
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    if(error)
      console.log(error)

    // this.setState(() => {
    //   return {
    //     error
    //   };
    // });

    this.setState(() => ({ error }));

    // for clearing input:
    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error} </p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
