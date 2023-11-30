//Hàm delete trong JavaScript được sử dụng để xoá một thuộc tính hoặc một phần tử khỏi một đối tượng hoặc một mảng
//Xóa thuộc tính của đối tượng
const person1 = { name: "John", age: 30 };
delete person1.age; // Xoá thuộc tính age khỏi đối tượng person
console.log(person1); // Kết quả: { name: 'John' }

//Xóa phần tử trong mảng
const numbers = [1, 2, 3, 4, 5];
delete numbers[2]; // Xoá phần tử có chỉ số 2 khỏi mảng
console.log(numbers); // Kết quả: [1, 2, <empty>, 4, 5]

//Xóa biến toàn cục
var globalVar = 10;
delete globalVar; // Trong môi trường nghiên cứu hoặc chế độ nghiêm ngặt, này không hoạt động và trả về false.
console.log(globalVar); // Kết quả: 10

//Xóa biến toàn cục trong 1 hàm
function exampleFunction() {
  var localVar = 20;
  delete localVar; // Trong môi trường nghiên cứu hoặc chế độ nghiêm ngặt, này không hoạt động và trả về false.
  console.log(localVar); // Kết quả: 20
}
exampleFunction();
