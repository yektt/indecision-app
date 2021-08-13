import React from "react";

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

export default Action;
