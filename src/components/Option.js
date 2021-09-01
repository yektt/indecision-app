import React from "react";

// converting Option class to the stateless function component
const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button 
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
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