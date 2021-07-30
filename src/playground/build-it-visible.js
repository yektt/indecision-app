class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return{
        visibility : !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p key="info">Here is some hidden information</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };


// let buttonText = 'Show details';

// const onShowHide = () => {
//   (buttonText.includes('Show details') ? buttonText = 'Hide details' : buttonText ='Show details')
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1> Visibility Toggle </h1>
//       <button onClick={toggleVisibility}> {visibility ? 'Hide details' : 'Show details'} </button>
//       {visibility && (
//         <div>
//           <p key="info">Here are some hidden information</p>
//         </div>
//       )}
//     </div>
//   );
//   // we can initialize where to render in here (after comma)
//   ReactDOM.render(template, document.getElementById('app'));
// };

// render();