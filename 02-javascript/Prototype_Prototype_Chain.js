function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log("Hi " + this.name);
  };
}

const p1 = new Person("Hari");
const p2 = new Person("Ravi");

//  why we need prototype look at this example
//  for every new person p1,p2 memory will be created while calling the function
// if there are 1000 persons 1000 memory space need to be allocated

// Without Prototype

function Person(name) {
  this.name = name;
  this.greet = function () {
    // ...    ovvoru new la create aagum
  };
}
// p1 → { name, greet① }
// p2 → { name, greet② }
// p3 → { name, greet③ }
// ...
// 100 objects → 100 greet functions

// With Prototype

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  // ...     oru dhaan
};

// p1 → { name } ─┐
// p2 → { name } ─┼──▶ Person.prototype { greet }   ← 1 dhaan
// p3 → { name } ─┘

p1.greet === p2.greet;
// prototype illama: false
// prototype la:     true

//  becoz it uses same memory

// try out

function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function () {
  console.log(this.name + " woof");
};

const d1 = new Dog("Tommy");

// P1
console.log(d1.bark === Dog.prototype.bark);

// P2
console.log(d1.hasOwnProperty("name"));

// P3
console.log(d1.hasOwnProperty("bark"));

// P4
console.log(d1.xyz);

// P5
d1.bark();

// Reasons using prototype

// 1.Memory Save
// 2.Inheritance code reuse once we create the prototype we can call and use it
// 3.Built-in Methods
