### nested function

```javascript
function sayHi(firstName, lastName){
    function getFullName(){
        return `${firstname} ${lastname}`;
    }
console.log("Hello", getFullName());
console.log("Hi", getFullName()):
}
sayHi("Ngọc", "Huyền");
```

- getFullName có thể truy tới biến ngoài hàm firstName, lastName

- return về nested function, có thể sử dụng hàm trả về ở bất kỳ đâu mà vẫn có thể  
  truy cập được biến ngoài hàm(outer function) một cách giống nhau

```javascript
function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}
//counter1 là nested function
let counter1 = counter();
//sau mỗi lần gọi hmaf counter1 thì giá trị count tăng lên 1
console.log(counter1()); //0
console.log(counter1()); //1
console.log(counter1()); //2

//tạo counter2, giá trị count độc lập với couter1
let counter2 = counter1();
console.log(counter2()); //0
console.log(counter2()); //1
console.log(counter2()); //2
//khi gọi hàm couter2, giá trị count vẫn bắt đầu từ 0, chứ không phải 2
```
