let map = new Map();
map.set("1", "str1");
map.set(1, "num1");

let john = { name: "John" };
let visitCountMap = new Map();
visitCountMap.set(john, 123);
console.log(visitCountMap.get(john));

const arr = [1, 2, 3, 1, 2, 3, 2, 4, 5];
const removeDuplicate = [...new Set(arr)];
console.log(removeDuplicate);
