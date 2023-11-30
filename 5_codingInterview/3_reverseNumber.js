function reverseNumber(num) {
  let result = 0;
  while (num > 0) {
    let a = num % 10;
    result = result * 10 + a;
    num = Math.floor(num / 10);
  }
  return result;
}

function reverseNumberV2(num) {
  return num.toString().split("").reverse().join("");
}

function sumNumber(num) {
  let result = 0;
  while (num > 0) {
    let temp = num % 10;
    result += temp;
    num = Math.floor(num / 10);
  }
  return result;
}
console.log(sumNumber(123));
