//named function
function sayHello() {
  console.log("Say Hello");
}

sayHello();

//return function
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 3));

//expression function
const sayHi = function hi() {
  console.log("Say Hi");
};
sayHi();

// anonymous function
const a = function () {
  console.log("a");
};
a();

//arrow function
const b = () => {
  console.log("b");
};
const c = (a, b) => a + b;
