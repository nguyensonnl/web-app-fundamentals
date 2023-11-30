(function () {
  console.log("Say Hi");
})();

(function (msg) {
  console.log(msg);
})("Say HI");

const example = (function () {
  return 10;
})();
console.log(example);

(() => console.log("Say HI"))();
