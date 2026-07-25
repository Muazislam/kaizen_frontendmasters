class Person {
  constructor(name) {
    // constructor runs automatically when you do new Person(....)
    this.name = name; // property | this refers to the specific object instance being created/used
  }

  greet() {
    // method
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p = new Person("Alex");
p.greet(); // Hi, I'm Alex

// Creating private class in js
// Private classes are internal data that is hidden from the outside
// And only the defined methods can access it

class Counter {
  #count = 0; // private -- can't be accessed outside this class

  increment() {
    // this is a method and a void funcition that we produce that is used to increment in
    // the private property.
    this.#count++; // this here is acting like a pointer and it refers to the private property (object reference being created)
  }

  getCount() {
    return this.#count;
    // this is a funciton or method that specifically returns the value to the
  }
}

const c = new Counter();
c.increment(); //  here c is like at the place of constructoer and it works like a function when we call a function, i think we write the call function same like this now when we are calling the class.
console.log(c.getCount());
console.log(c.#count);

// the bottom prints the result of the private method so, it is not printed.
// is the private a class within a class?

// <<=======================>>
// <<       Node class       >>
// <<=======================>>

class Node {
  #data;
  #nextRef;

  constructor(x) {
    this.#data = x;
    this.#nextRef = null; // no next code yet
  }

  getData() {
    return this.#data;
  }

  getNext() {
    return this.#nextRef;
  }

  setNext(node) {
    this.#nextRef = node;
  }
}
