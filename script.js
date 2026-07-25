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
