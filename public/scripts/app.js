'use strict';

// conditional statements:
// condition ? if it's true : if it's false
// exp: array.length = 0 ? 'hello, I am free' : 'I am busy'
// if the array length is equal to zero, means there is no array,
// so the phrase will be written on the screen
// if the array length is not equal to zero, means I am busy will be the output.

// JSX - JavaScript XML (JS syntax extension)
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  // this will stop to refresh all page
  e.preventDefault();

  // e.target will point to the element that started the event. -- e.target
  // we can get the elements of the target -- e.target.elements
  // we can choose a specific element with using their unique name -- e.target.elements.option
  // we can get the value of chosen element -- e.target.elements.option.value
  var option = e.target.elements.option.value;

  // re setting the input value as an empty string after adding the value that
  // user has been entered to the object's (app)
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

// in form, we just refer the onFormSubmit
// we did not want to call it. If we want to call it instead of refering
// we should have use onFormSubmit() -- with bracelets

var appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
      'p',
      null,
      'Here are your options'
    ) : React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
