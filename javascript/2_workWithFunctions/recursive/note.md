### what

- Hàm đệ quy là hàm gọi lại chính nó
- Phần cơ sở: điều kiện để thoát đệ quy
- Phần đệ quy: gọi lại chính nó

```javascript
function sayHello(count) {
  // phần cơ sở: điều kiện thoát đệ quy là biến count <= 0
  if (count <= 0) {
    return;
  }

  // xử lý logic cơ bản
  console.log("Hello world!");

  // phần đệ quy: gọi lại chính hàm sayHello
  sayHello(count - 1);
}
```

### When

- Bài toán có thể chia ra thành nhiều bài toán con
- Bài toán con có dạng tương tự như bài toán cha
- Menu đa cấp
- Comment cha con
