//object
const blackPink = {
  name: "Lisa",
  age: 20,
};
const a = {
  name: "Lisa",
  age: 20,
};
console.log(blackPink === a);
const x = 10;
const y = "10";
console.log(x === y);

//singleton
const User = (function () {
  let instance;
  function init() {
    return {
      name: "Lisa",
      printName() {
        console.log(this.name);
      },
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
const user1 = User.getInstance();
const user2 = User.getInstance();

console.log(user1);
