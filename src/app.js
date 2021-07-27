// conditional statements:
// condition ? if it's true : if it's false
// exp: array.length = 0 ? 'hello, I am free' : 'I am busy'
// if the array length is equal to zero, means there is no array,
// so the phrase will be written on the screen
// if the array length is not equal to zero, means I am busy will be the output.

// JSX - JavaScript XML (JS syntax extension)
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  // this will stop to refresh all page
  e.preventDefault();

  // e.target will point to the element that started the event. -- e.target
  // we can get the elements of the target -- e.target.elements
  // we can choose a specific element with using their unique name -- e.target.elements.option
  // we can get the value of chosen element -- e.target.elements.option.value
  const option = e.target.elements.option.value;

  // re setting the input value as an empty string after adding the value that
  // user has been entered to the object's (app)
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
}

// in form, we just refer the onFormSubmit
// we did not want to call it. If we want to call it instead of refering
// we should have use onFormSubmit() -- with bracelets

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {(app.subtitle && <p>{app.subtitle}</p>)}
      {(app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>)}
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove all</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();