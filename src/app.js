// conditional statements:
// condition ? if it's true : if it's false
// exp: array.length = 0 ? 'hello, I am free' : 'I am busy'
// if the array length is equal to zero, means there is no array,
// so the phrase will be written on the screen
// if the array length is not equal to zero, means I am busy will be the output.


console.log('App.js is running ');

// JSX - JavaScript XML (JS syntax extension)
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {(app.subtitle && <p>{app.subtitle}</p>)}
    {(app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>)}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>);

const user = {
  name: 'Yekta',
  age: 28,
  location: 'Lausanne'
};

function getLocation (location) {
  if(location)
    return <p>Location: {location} </p>;
}

const temp2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>
    // we are checking if user has any recorded age or not
    // if user has and if user age is less than 18, the p tag will not show up on the page.
    } 
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
