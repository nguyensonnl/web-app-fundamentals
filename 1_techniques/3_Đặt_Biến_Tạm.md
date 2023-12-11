### Kỹ thuật đặt biến tạm

- Biến tạm là một kỹ thuật đơn giản dùng để lưu một giá trị một biến khác
- trước khi nó bị thay đổi hoặc dùng để tính giá trị tạm thời cần được sử dụng ngay

```javascript
//Bài toán hoán vị 2 số nguyên. Biến temp chỉ được sử dụng để làm biến trung gian
//hoán vị giữa 2 biến first và second. Nó không lưu giữ giá trị để xử lý tiếp ngay
//khi hoàn tất hoán vị

let temp;
temp = first;
first = second;
second = temp;
```
