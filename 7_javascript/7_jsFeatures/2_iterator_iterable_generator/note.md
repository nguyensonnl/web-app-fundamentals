### Iterator là gì?

- Trong js, 1 iterator là 1 object mà nó định nghĩa 1 trình tự và giá trị có thể trả về tiếp theo trước khi kết thúc

### Iterable là gì?

- Iterable nghĩa lả khả duyệt, tức là có thể lặp qua các phần tử bằng for ... of
- ! đối tượng muốn được lặp bằng for...of thì phải có phương thức @@iteractor(tên phương thức nó là như vậy, mục đích chủ yếu là để quy định rằng buộc các kiểu return trong phương thức)

### Generator là gì?

- Là 1 object return bởi 1 generator function, và nó cũng là iterable, cũng như là 1 iterator
- Chỉ được tạo từ generator function
