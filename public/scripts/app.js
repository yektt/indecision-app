console.log('App.js is running ');

// JSX - JavaScript XML (JS syntax extension)
var template = <p> This is JSX from app.js </p> ;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);