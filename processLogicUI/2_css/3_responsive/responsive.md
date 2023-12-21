## Responsive

### Adaptive Web Design(AWD)

- Thiết kế bố cục giao diện cố định cho các kích cỡ màn hình khác nhau
- Nhà thiết kế có thể tạo ra những trải nghiệm hoàn toàn khác nhau cho điện thoại, máy tính bảng và máy tính để bàn
- Điện thoại 1 source, máy tính bảng 1 source

### Responsive(RWD)

- Thiết kế và phát triển web sẽ đáp ứng mọi thiết bị và môi trường của người dùng
- theo các tiêu chí kích thước và chiều cao của thiết bị

### Mobile First Design(MFD)

- Giao diện web được thiết kế theo hướng từ thiết bị màn hình nhỏ(mobile)
- rồi mới đến các thiết bị có màn hình lớn lần lượt là: Tablet, Laptop, Desktop

### Viewport

- Là khung hình user nhìn thấy trên thiết bị của họ khi vào một trang web bất kỳ
- Với mỗi thiết bị sẽ có viewport khác nhau

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- width=device-width: Thiết lập chiều rộng của trang web theo chiều rộng của thiết bị
- initial-scale=1.0: Thiết lập mức độ zoom ban đầu khi trang web được load bởi trình duyệt

### Grid View

- 12 columns

### CSS Media Queries

- @media
- breakpoint, container size

```css
.container {
  max-width: 120px; /* max-width tùy thuộc bản thiết kế*/
}
/* Laptop lớn scrren <= 144px(Tùy yêu cầu thiết kế)> */
@media (max-width: 144px) {
  /* container max-width không thay đổi*/
}

/* Laptop nhỏ hoặc tablet lớn screen < 1200px*/
@media (max-width: 1199.98px) {
  .container {
    max-width: 1140px;
  }
}

/* Tablets vừa, srceen <= 992px*/
@media (max-width: 991.98px) {
  .container {
    max-width: 960px; /*Hoặc max-width: 100% tùy theo yêu cầu*/
  }
}

/*Tablets nhỏ  hoặc iphone quay ngang, screen < 768px*/
@media (max-width: 767.98px) {
  .container {
    max-width: 720px; /*Hoặc max-width: 100% tùy theo yêu cầu*/
  }
}

/*Phones lớn, screen < 576px*/
@media (max-width: 575.98px) {
  .container {
    max-width: 100%;
  }
}

/*Phones nhỏ, screen < 376px - Tùy theo yêu cầu*/
@media (max-width: 375.98px) {
  /* container max-width: không thay đổi*/
}
```
