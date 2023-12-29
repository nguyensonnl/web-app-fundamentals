const person = {
  firstName: "Ngọc Huyền",
  lastName: "Vũ Thị",
  age: 28,
};

function getFullName(text1, text2) {
  console.log(`${text1} ${text2} ${this.lastName} ${this.firstName}`);
}

getFullName.call(person, "Hello", "chị");

//bug: Khi mà định nghĩa biến của object
//this trong arrow function

let person1 = {
  name: "Lisa",
  age: 24,
};

function say(text1, text2) {
  console.log(`${text1} ${text2} ${this.name} ${this.age}`);
}
say.call(person1, "Xin", "Chao");
say.apply(person1, ["Xin", "chào"]);

const newSay = say.bind(person1, "Xin", "Chào");
newSay();
