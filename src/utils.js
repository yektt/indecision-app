console.log('in utils.js');

const square = (x) => x * x ;

const add = (a,b) => a + b ;

// this is not an object definition
// we need to put the references that we want to export
export { square, add };
