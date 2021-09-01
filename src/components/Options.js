import React from "react";
import Option from "./Option";
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

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}>
          Remove all
      </button>
    </div>
    
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
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

export default Options;