const reverseNumber = (number) => {
  let result = 0;

  while (number > 0) {
    let temp = number % 10;
    result = result * 10 + temp;
    number = Math.floor(number / 10);
  }
  return result;
};
console.log(reverseNumber(12345));

//Use method js
const reverseNumberJS = (number) => {
  return +(number + "").trim().split("").reverse().join("");
};
console.log(reverseNumberJS(12345));
