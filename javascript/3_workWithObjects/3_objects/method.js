const person = {
  name: "Ngọc Huyền",
  age: 19,
  gender: "Female",
};
Object.freeze(person);
person.age = 10;
console.log(person);

const methodKeys = Object.keys(person);
console.log(methodKeys);

const methodValues = Object.values(person);
console.log(methodValues);

const methodEntries = Object.entries(person);
console.log(methodEntries);

const a = {
  habits: "Watching Movie",
};

Object.assign(person, a);
console.log(person);
