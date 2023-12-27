### DOM Nodes

- Khi sử dụng DOM Element để truy vấn tới một đối tượng HTML, kết quả sẽ return về object
- object người ta gọi là DOM Nodes

```javascript
//create element
const nameElement = document.createElement("name element");

//text node
document.createTextNode("value");

//Thêm node vào trang web
document.querySelector("selector").appendChild(nameElement);
```
