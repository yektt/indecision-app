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
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2> }
    </div>
  </div>
);

// this is an object
// it can be override in other components
Header.defaultProps = {
  title: 'Indesicion'
};

export default Header;
