const currying1 = function (l, w, h) {
  return l * w * h;
};
function curring2(l) {
  return function (w) {
    return function (h) {
      return l * w * h;
    };
  };
}

const currying3 = (l, w, h) => l * w * h;
console.log(currying3(10)(20)(30));
