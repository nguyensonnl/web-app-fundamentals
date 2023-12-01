### Currying

- Currying là một kỹ thuật mà cho phép chuyển đổi một function nhiều tham số thành những function liên tiếp có một tham số
- Currying là 1 function trả về 1 function
- Có thể kết hợp cả closure và curring trong cùng 1 function
- Là 1 kỹ thuật mà cho phép chuyển đổi 1 function nhiều tham số thành những function liên tiếp có 1 tham số

- Ví dụ ta có 1 hàm discount giãm 10% giá trị

```javascript
const discount = () => {
  let price = 1000;
  let percent = 10 / 100;
  return () => {
    price -= percent * price;
    return price;
  };
};

const dis = discount();
console.log(dis()); // - 10% = 900
console.log(dis()); // - 10% = 810
```

- Ví dụ ta muốn tạo ra nhiều loại giảm giá với các loại khác nhau

```javascript
const product = () => {
  let price = 1000;
  return (percent) => () => {
    price -= percent * price;
    return price;
  };
};

let discount = product();

const dis10 = discount(10 / 100);
const dis20 = discount(20 / 100);
console.log(dis10()); // - 10% = 900
console.log(dis20()); // -20% = 720
```

- Currying thường được dùng để tạo ra nhiều function nhưng khác tham số, ví dụ discount10, discount20
- Currying giúp viết code tối ưu và sử dụng lại mã code hiệu quả hơn
