import React from "react";

// converting Option class to the stateless function component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
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

export default Option;