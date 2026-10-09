let a = 5;
let b = 10;

function check() {
  let b = 10;
  console.log(a);
  console.log(b);
}
check();
// b is declared inside check
// so it is local variable to function check()
console.log(b);
// a is global varibale it can be accessed anywhere
console.log(a);

function call() {
  let x = 5;
}
x = 10;
// x is function scope so we cant use outside of function
console.log(x);

if (a == 5) {
  var z = 100;
}
// function scope cant be accessed but we can access block scope level
console.log(z);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
// var i is function/global scoped, so there is only one i. By the time the timeouts run, the loop is done and i = 3.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
//   let creates a new i for every iteration (a fresh block scope each time), so each callback remembers its own i.

let outer = "Hello";

function inner() {
  let outer = "hi";
  console.log(outer);
}
inner();
console.log(outer);

// this is lexical scope JavaScript decides which variables a function can access by where the function is written in the source code, not where it is called.

let j = 10;

function one() {
  let k = 11;
  function two() {
    let l = 12;
    console.log(j, k, l);
  }
  two();
}
one();

// Temporarl DeadZone if variable is declared in let it cant be called before
let xo = 100;
console.log(xo);
console.log(ox);

var ox = 110;

// it is consider as sloppy mode
// it is global can be accessed leaker
// window.abc or globalThis.abc
abc = 1000;
