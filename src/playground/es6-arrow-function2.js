// arguments object - no longer bound with arrow functions
// if you try to access arguments, it is not going to work

// es5 function:
const add = function (a,b) {
  // this line will console log all the arguments of this function
  console.log(arguments);
  return a + b;
}
console.log(add(55,1));
// if we will write add (55, 1, 100)
// we will be able to see '100' in the arguments log out.

//es6 function:
const addArrow = (a, b) => {
  // if we will use this line : console.log(arguments);
  // we will get an error like no arguments is not defined
  // if there is a requirement to reach out the arguments, you should
  // use es5 instead of es6
  return a + b;
};
console.log(addArrow(55,1));

// this keyword - no longer bound with arrow functions
// if you try to use 'this', it will not work either

// es5 - this usage
const user = {
  name: 'Andrew',
  cities: ['Mersin', 'Ankara', 'Lausanne', 'Amsterdam'],
  printPlacesLived: function() {
    console.log(this.name);
    console.log(this.cities);

    const that = this;

    this.cities.forEach(function (city) {
      // we could not reach the 'this.name' variable under 'forEach'
      // we had to create a new variable which called 'that'
      // and used 'that' for console log the 'name'
      console.log(that.name + ' has lived in ' + city);
    });
  }
}
user.printPlacesLived();

// es6 - this usage
const user2 = {
  name: 'Yekta',
  cities: ['Mersin', 'Ankara', 'Lausanne', 'Amsterdam'],
  // if we will change this function to arrow function,
  // the printing lived places will give an error
  // because it goes up to parent scope and indeed it is undefined

  // instead of following line
  // printPlacesLived2: function() {
  // we can write like this :
  printPlacesLived2() {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach((city) => {
      // arrow function does not bind its own value
      // so we can use 'this' inside of the arrow function
      console.log(this.name + ' has lived in ' + city);
    });
  }
}
user2.printPlacesLived2();


// usage of 'map' instead of 'forEach'
const user3 = {
  name: 'Yekta',
  cities: ['Mersin', 'Ankara', 'Lausanne', 'Amsterdam'],
  
  printPlacesLived3() {
    // most popular array method: map!
    // 'map' method does not affect this array
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
}
console.log(user3.printPlacesLived3());

// challenge part:
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,

  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());