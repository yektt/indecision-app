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
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      // after writing the defaultProps for IndecisionApp
      // we need to change inside of state
      // from
      // options : []
      // to
      options: props.options
    };
  }

  componentDidMount() {
    console.log('fetching data');
  }
  componentDidUpdate() {
    console.log('saving data');
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }

  handleDeleteOptions() {
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
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
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
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2> }
    </div>
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
const Action = (props) => {
  return(
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
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

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {
        // key is a special reserved name, it won't be available in Option component
        props.options.map((option) => (
          < Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
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
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  // for sending data from child to parent
  // you should add constructor method and bind the method again
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      error: undefined
    };
  }
  // class method
  // something that is contained inside of the class
  // other classes do not this method to run
  handleAddOption(e) {
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
  }
  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error} </p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
