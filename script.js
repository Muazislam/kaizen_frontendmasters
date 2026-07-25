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
  #count = 0;       // private -- can't be accessed outside this class

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.getCount());
console.log(c.#count);
