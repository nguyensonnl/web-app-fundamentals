### Kỹ thuật đặt cờ hiệu

- Để chỉ một biến dùng để đánh dấu kết quả, đa số để lưu lại két quả cuối cùng trong khi chạy vòng lặp
- Ban đầu ta đặt cho lá cờ này một giá trị mặc dịnh, trong suốt vòng lặp, ta sẽ cập nhật cờ này

```javascript
//Bàn toán kiểm tra xem tất cả các element trong mảng đều là giá trị chẵn.
//Ban đầu sử dụng biến flag với giá trị mặc định là 1(true)
//Để khẳng định các biến đều là chẵn. Duyệt các element trong array, nếu có trường hợp đặc biệt
//xuất hiện phần tử lẻ, thay đổi flag với giá trị 0(false), và thoat ra khỏi vòng lặp

function checkElementEven(arr) {
  let flag = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      flag = 0;
      break;
    }
  }
  return flag;
}
const result = checkElementEven([4, 4, 6, 14, 40, 8]);
if (result) {
  console.log("Even");
} else {
  console.log("Not even");
}
```
