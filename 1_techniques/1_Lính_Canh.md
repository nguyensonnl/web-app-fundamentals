### Kỹ thuật đặt lính canh

- Trong lập trình, kỹ thuật đặt lính canh khá cơ bản, áp dụng trong các bài tìm kiếm
- giá trị lớn nhất hoặc nhỏ nhất, nó đảm bảo được tính chính xác trong thuật toán tổng quát

```javascript
//Biến max đóng vai trò là lính canh, nhận giá trị là phần tử đầu tiên trong mảng
//Trong quá trình xử lý, đổi lính canh max bằng arr[i] nếu xuất hiện phần tử ở vị trí i phù hợp hơn
function findFirstLarge(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findFirstLarge([1, 4, 3, 6, 19, 9]));
```
