//demo1
const cursh = "Ngọc Huyền";

function sayHello() {
  const say = "Anh Nhớ";

  function sayCrush() {
    console.log(`${say} em ${cursh} à`);
  }
  sayCrush();
}

sayHello();

//demo2
const increase = () => {
  let count = 0;

  const increaseInit = () => ++count;
  return increaseInit;
};
console.log(increase()());
console.log(increase()());
const a = increase();
console.log(a());
console.log(a());
