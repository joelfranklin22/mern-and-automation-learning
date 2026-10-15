// Synchronous running

console.log("A");
console.log("B");
console.log("C");

function check() {
  console.log("inside a function");
}
console.log("before function call");
check();
console.log("after function call");

console.log("------------------------------------------------------------");

// Call stack

function first() {
  second();
  console.log("inside first function");
}
console.log("middle of the function");

function second() {
  console.log("second function");
}
console.log("outside a function ");
first();

console.log("------------------------------------------------------------");

// Asynchronous

setTimeout(() => {
  console.log("inside timeout function for aynchronous");
}, 0);
console.log("outside time out ");

console.log("------------------------------------------------------------");

//Promises

console.log("Start");

setTimeout(() => {
  console.log("inside time out");
}, 0);

Promise.resolve().then(() => {
  console.log("inside promise");
});

console.log("end");

console.log("------------------------------------------------------------");

//Async and Await

async function getData(params) {
  console.log("inside getData function");

  Promise.resolve().then(() => {
    console.log("promise inside getData function");
  });
}
console.log("before getData async function");

getData();
console.log("after getData async function");
