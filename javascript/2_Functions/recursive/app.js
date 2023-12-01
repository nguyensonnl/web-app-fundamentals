//recursive
function sayHi(n) {
  if (n <= 0) {
    return;
  }
  console.log("Hi");
  sayHi(n - 1);
}
sayHi(5);

//without recursive
function sayHello(n) {
  for (let i = 0; i < n; i++) {
    console.log("Say Hello");
  }
}
sayHello(5);

//Tính a^b
function power(a, b) {
  if (b === 0) {
    return 1;
  }

  return a * power(a, b - 1);
}
console.log(power(2, 3));
