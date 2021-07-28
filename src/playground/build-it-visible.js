let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};


let buttonText = 'Show details';

const onShowHide = () => {
  (buttonText.includes('Show details') ? buttonText = 'Hide details' : buttonText ='Show details')
  render();
};

const render = () => {
  const template = (
    <div>
      <h1> Visibility Toggle </h1>
      <button onClick={toggleVisibility}> {visibility ? 'Hide details' : 'Show details'} </button>
      {visibility && (
        <div>
          <p key="info">Here are some hidden information</p>
        </div>
      )}
    </div>
  );
  // we can initialize where to render in here (after comma)
  ReactDOM.render(template, document.getElementById('app'));
};

render();