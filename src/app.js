// // for string validations
// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndesicionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// usage of child props example;

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// }

// ReactDOM.render((
//   <Layout>
//     <div>
//       <h1>Page Title</h1>
//       <p>This is my page</p>
//     </div>
//   </Layout>
// ), document.getElementById('app'));
