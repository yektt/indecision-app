console.log('in utils.js');

// we can write like this as well:
// export const square = (x) => x*x;
// like this, we do not need to export it again at the bottom
// if we want to declare the method as default
// we need to write like this:
// declare the subtract above the declaration of 'export default'
// then use
// export default subtract;
// expression to export it.
const square = (x) => x * x ;

const add = (a,b) => a + b ;

const subtract = (a, b) => a - b;

// this is not an object definition
// we need to put the references that we want to export

// if you want to describe an export const as a default one.
// you need to write 'as default' after the name of it
// you can do this to only one 
export { square, add, subtract as default };


// what makes the default special!:
// you can call the default method with another name 
// (naming is not important for default methods)
// if there is one big method that has been using a lot
// assign that as default