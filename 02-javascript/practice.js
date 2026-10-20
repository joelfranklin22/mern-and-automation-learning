const arr = [1, 2, 3, 4, 5];

arr.length = 0;
console.log(arr);

function maxProduct() {
  arr.sort();
  return arr[arr.length - 1] * arr[arr.length - 2];
}

console.log(maxProduct());

const obj1 = {
  user1: {
    name: "joel",
    age: 23,
  },
  user2: {
    name: "john",
    age: 23,
  },
};

const obj2 = {
  user1: {
    name: "joel22",
    age: 223,
  },
  user2: {
    name: "john22",
    age: 2223,
  },
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

var x = 100;
{
    let x = 500;
}
console.log(x);

let a = x;
console.log(a);
{
  let a = 1000;
}
console.log(a);
