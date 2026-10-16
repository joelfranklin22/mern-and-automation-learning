// Call stack managing function call in LIFO order

function first() {
  console.log("First started");
  second();
  console.log("First ended");
}

function second() {
  console.log("Second started");
  third();
  console.log("Second ended");
}

function third() {
  console.log("Third started");
}

first();
console.log("Program ended");

// Nested function calls

function add(a, b) {
  return a + b;
}

function calculate() {
  let result = add(10, 20);
  console.log(result);
}

calculate();

// local varibales after function ends
function greet() {
  let message = "Vanakkam";
  console.log(message);
}

// console.log("mesage",message);
greet();

// return vs console.log

function one() {
  console.log("Hello");
}

function two() {
  return "Hello";
}

let a = one();
let b = two();

console.log(a);
console.log(b);

// looping function calling

function count() {
  if (1) {
    console.log("hi");
    return;
  }
  count();
}
count();

function fact(n) {
  if (n == 0) return;
  console.log(n);
  count(n - 1);
}
fact(5);

//Global Execution Context (GEC)
//Program-oda global code execute aaguradhukku use aagum.

let name1 = "joel";

function name() {
  console.log(name1);
}
name();

//Function Execution Context (FEC)
// Oru function call aagumbodhu, andha function-oda execution-ai manage panna function execution context create aagum.

function test() {
  let name1 = "joel franklin";
  console.log(name1);
}
test();

// Creation Phase: Variables, function declarations, and related environment information prepare pannappadum.

// var a;    // Declaration
console.log(a1); //it will be undefined

var a1 = 10;
// a = 10;   // Assignment

console.log(a1);

// but function declaration wrks but not function expression

greet2();
function greet2() {
  console.log("inside greet(");
}
// it wrks

// greet3();
const greet3 = function () {
  console.log("inside greee3");
};
// gives error

// call stack in synchronous execution
function first() {
  second();
  console.log("First");
}

async function second() {
  console.log("Second");
}

function third(params) {
  console.log("third inside third function");
}

first();
third();
console.log("Third");

// long running stack  function

function slow() {
  let i = 0;

  while (i < 1000000000) {
    i++;
  }

  console.log("Slow finished");
}

function next() {
  console.log("Next finished");
}

slow();
next();

// dev tools call stack trace
function third1() {
  //   debugger;
  console.log("Third");
}

function second1() {
  third1();
}

function first11() {
  second1();
}

first11();

// Recursion vs iteration

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

console.time("Recursion");
console.log("recursion", fact(50));
console.timeEnd("Recursion");

console.time("looping");
var fact = 1;
var n = 50;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log("looping", fact);
console.timeEnd("looping");
