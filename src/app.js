// creating React component
class IndecisionApp extends React.Component {
  render() {
    return ( 
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  // React.Component requires one method define : 'render'
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        I am an option.
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Add option component here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
