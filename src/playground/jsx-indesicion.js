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
};

// it will generate a random number and will display on the screen
// for user to do next task
const onMakeDecision = () => {
  // Math.random always working between 0 and 1.
  // Math.floor will round down the number
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

// in form, we just refer the onFormSubmit
// we did not want to call it. If we want to call it instead of refering
// we should have use onFormSubmit() -- with bracelets

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {(app.subtitle && <p>{app.subtitle}</p>)}
      {(app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>)}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove all</button>
      {
        // JSX will not display 'undefined', 'null' or booleans (true and false)
        // other than these, JSX will display numbers, strings, 
        // expressions inside HTML tags and arrays...
        // for arrays, JSX will break the elements of the array 
        // and will display one by one
        // for JSX elements inside of HTML tags, we should have assign a unique 'key' for each
        // [99, 98, 97, <p key="1">1</p>, <p key="2">2</p>]

        
        //  numbers.map((number) => {
        //  return <p key={number}> Number: {number}</p>;
        //  })
        
      }
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
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