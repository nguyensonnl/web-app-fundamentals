### Closure

- Là một tập hợp các hàm được viết lồng vào trong một hàm khác với mục đích biến toàn cục và biến cục bộ của hàm ngày cả khi nó đã đóng lại hoặc sử dụng biến của chính nó
- Function cha return về một function con bên trong nó
- Function con đó có thể truy cập và thực thi các biến của function cha
- Là 1 hàm bên trong hàm khác
- Truy cập đến các giá trị bên ngoài phạm vi của nó
- Truy cập vào các biến trong phạm vi của riêng nó, trong hàm và biến toàn cục
- Closure (tạm dịch: bao đóng) cho phép lập trình viên Javascript viết mã tốt hơn.
- Trước khi làm quen với closure, bạn nên hiểu rõ về scope của 1 biến: const, var, let
- Closure là một hàm được tạo ra từ bên trong một hàm khác, hàm bên trong có thể sử dụng các biến của hàm bao ngoài nó  
  Có thể trả về hàm bên trong đó ra ngoài trong trường hợp cần thiết
- Closure là cách mà function cha return về 1 function con bên trong nó
- Ở bên trong function con đó có thể truy cập và thực thi các biên của function cha
- Hàm bên trong không chỉ truy cập được các biến bên ngoài, mà còn sử dụng được các biến khi sử dụng truyền vào
- Closure có thể truy cập biến bên ngoài, ngay cả khi hàm bên ngoài đã được trả về
- Closure lưu tham chiếu đến biến của hàm bên ngoài:

```javascript
function celebrityID() {
  var celebrityID = 999;
  // Ta đang trả về một object với các hàm bên trong.
  // Tất cả các hàm bên trong có thể truy cập đến biến của hàm ngoài (celebrityID).
  return {
    getID: function () {
      // Hàm này sẽ trả về celebrityID đã được cập nhật.
      // Nó sẽ trả về giá trị hiện tại của celebrityID, sau khi setID thay đổi nó.
      return celebrityID;
    },
    setID: function (theNewID) {
      // Hàm này sẽ thay đổi biến của hàm ngoài khi gọi.
      celebrityID = theNewID;
    },
  };
}
```

- Trong chế độ strict mode con trỏ this khi sử dụng sẽ là undefined. Đối với chế độ bình thường this chính là window
- Closure giúp quản lý code hiệu quả và ngắn gọn hơn, tăng khả năng sử dụng lại code
- Một function cha return về một function con bên trong nó
- Ở trong function con có thể truy cập và thực thi các biến bên trong function cha

### Access

- closure có thể truy cập biến ở 3 phạm vi khác nhau:
  - Biến toàn cục(global)
  - Biến được khai báo ở ngoài hàm(outer function)
  - Biến ở trong hàm closure(local)
