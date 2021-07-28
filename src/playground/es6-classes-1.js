// classes:  we can re-use the code with them.

class Person {
  // if you want to define something as default
  // use '=' 
  // you can assign true, false, string, number...
  // you can use this method in anywhere you define arguments list
  constructor(name = 'anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // return ('Hi ' + this.name + ' !');
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

// Student is a child of Person class
// Student class' objects will have all Person class' attributes
// and Student class' attributes as plus
class Student extends Person {
  // we are still adding the name and age
  constructor(name, age, major) {
    // we need to call the parent class' constructor method
    // for this, we are using 'super' keywords
    // super refers to the parent class when we call it as a function
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  // overriding the getDescription method
  getDescription() {
    // we get the parent class' getDescription method
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += `. Their major is ${this.major}`;
    } 
    return description;
  }
}

const me = new Student('Yekta Turan', 28, 'Computer science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());


// challenge
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const traveller1 = new Traveler('Yekta', 12, 'Lausanne');
console.log(traveller1.getGreeting());

const traveller2 = new Traveler('olga');
console.log(traveller2.getGreeting());