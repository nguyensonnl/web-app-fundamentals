//This đứng 1 mình
var x = this;
console.log(this);

//This trong functionc
function sayHi() {
  console.log(this);
}
sayHi();

//This trong arrow function

const sayHello = () => {
  console.log(this);
};
sayHello();

//This trong method(object)
let person = {
  firstName: "Lisa",
  lastName: "La",
  age: 25,
  habit: "Dancing",
  fullname() {
    return this.lastName + this.firstName;
  },
};

const handleFullName = person.fullname;
//Tạo ra 1 vùng nhớ mơi
console.log(handleFullName());
//fix:
// const handleFullName = person.fullname.bind(person)
console.log(person.fullname());
