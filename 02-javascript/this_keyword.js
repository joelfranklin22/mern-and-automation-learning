const user = {
  name: "joe",
  greet() {
    console.log(this.name);
    //user.greet() → dot ku munnadi user irukku → this = user.
    // user is replaced by the this
    // we dont need call using user.name instead we can use this
  },
};
console.log(user.greet());

// Object method

const user2 = {
  name: "Hari",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // "Hari"  (this = user)

// Normal function

function call() {
  console.log(this);
}

// if the js is in strict mode it will print undefined
// now it is sloppy mode like window global

const user3 = {
  name: "Hari",
  greet() {
    console.log(this.name);
  },
};

const fn = user3.greet; // function ah copy panna
fn(); // undefined (this = window, dot illa)

// fn() la dot illa, so this user illa
// if fn is assigned like this -> const fn =this.greet it wrks
