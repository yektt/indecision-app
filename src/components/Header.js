import React from "react";

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
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2> }
  </div>
);

// this is an object
// it can be override in other components
Header.defaultProps = {
  title: 'Indesicion'
};

export default Header;
