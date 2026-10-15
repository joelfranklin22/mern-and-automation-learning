function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2
fn(); // 3

// Step 1: outer() run aagum. count = 0 create aagum.

// Step 2: inner create aagum. Adhu outer oda environment (count irukkura idam) ku link vechikkum.

// Step 3: outer() mudiyum, inner return aagum. Normal ah count poirukkanum.

// Step 4: But inner ku link irukku. So JS count ah delete pannadhu. Garbage collector “yaaro use panraanga” nu vittudum.

// Step 5: fn() call panna, inner link vazhiya count ah edukkum. count++.

// Real cases

function createBank() {
  let balance = 0; // veliya irundhu touch panna mudiyadhu

  return {
    deposit(n) {
      balance += n;
    },
    getBalance() {
      return balance;
    },
  };
}

const acc = createBank();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.balance); // undefined (private)

// Factory function

function multiplier(n) {
  return (x) => x * n;
}

const double = multiplier(2);
const triple = multiplier(3);
double(5); // 10
triple(5); // 15

// Prb in looping

for (var i = 1; i <= 3; i++)
  setTimeout(() => {
    console.log(i);
  }, 100);

for (let i = 0; i < 3; i++)
  setTimeout(() => {
    console.log(i);
  }, 100);

//   let created new i for every iteration and rememebrs each callback value
