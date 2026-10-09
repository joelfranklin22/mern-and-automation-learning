console.log(a); // undefined
var a = 5;
console.log(a);

// But the JS Engine looks

var a; // Phase 1: declaration hoisted, value = undefined
console.log(a); //undefined
var a = 5; //  Phase 2: assignment stays in place
console.log(a);

function test() {
  console.log(x); // undefined
  if (false) {
    var x = 10;
  }
}

// But the JS Engine looks

var x;
function test() {
  console.log(x); // undefined
  if (false) {
    var x = 10;
  }
}
//  so here x looks undefined so it gives referenceError

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 5;

{
  // Temporarl Dead Zone
  // ← TDZ start for 'name'
  console.log(name); // ❌ ReferenceError
  // ...
  let name = "Hari"; // ← TDZ end, ippo use pannalam
  console.log(name); // "Hari"
}

sayHi(); // ✅ "Hi"

function sayHi() {
  console.log("Hi");
}

// function hositing

console.log(a);
var a = 10;
a();

// Pass 1:
a: undefined; //  (function declaration illa, var mattum)

// Pass 2:
// Line 1:
console.log(a); // → undefined
// Line 2:
aa = 10;
// Line 3:
a(); //  → a = 10, number → ❌ TypeError: a is not a function
