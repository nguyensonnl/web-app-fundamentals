/**
 * 1. Kỹ thuật đăt lính canh
 * Trong lập trình, kỹ thuật đặt lính canh khá cơ bản, áp dụng trong các bài tìm kiếm
 * giá trị lớn nhất hoặc nhỏ nhất, nó đảm bảo được tính chính xác trong thuật toán tổng quát
 *
 * Biến max đóng vai trò là lính canh, nhận giá trị là phần tử đầu tiên trong mảng
 * Trong quá trình xử lý, đổi lính canh max bằng arr[i] nếu xuất hiện phần tử ở vị trí i phù hợp hơn
 */
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

/**
 * 2. Kỹ thuật đếm
 * Kỹ thuật đếm giúp bạn kiểm tra số lượng trường hợp quan trọng
 * Ban đầu, bạn cần một biến có giá trị bằng 0
 * Mỗi khi tìm thấy trường hợp thỏa mãn yêu cầu tăng biến đếm lên 1
 *
 * Với bài toán kiểm tra giá trị value, xuất hiện bao nhiêu lần trong mảng
 * Chúng ta sử dụng count với giá trị ban đầu bằng 0
 * mỗi lần tìm thấy trường hợp thỏa mãn arr[i] === value, tăng giá trị count lên 1
 */

function count(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) count++;
  }
  return count;
}
console.log(count([1, 3, 4, 3, 5, 3, 4, 5, 6], 6));

/**
 * 3. Kỹ thuật đặt biến tạm
 * Biến tạm là một kỹ thuật đơn giản dùng để lưu một giá trị một biến khác
 * trước khi nó bị thay đổi hoặc dùng để tính giá trị tạm thời cần được sử dụng ngay
 *
 * Bài toán hoán vị 2 số nguyên. Biến temp chỉ được sử dụng để làm biến trung gian
 * hoán vị giữa 2 biến first và second. Nó không lưu giữ giá trị để xử lý tiếp ngay
 * khi hoàn tất hoán vị
 */
let temp;
temp = first;
first = second;
second = temp;

/**
 * 4. Kỹ thuật đặt cờ hiệu
 * Để chỉ một biến dùng để đánh dấu kết quả, đa số để lưu lại két quả cuối cùng trong khi chạy vòng lặp
 * Ban đầu ta đặt cho lá cờ này một giá trị mặc dịnh, trong suốt vòng lặp, ta sẽ cập nhật cờ này
 *
 * Bàn toán kiểm tra xem tất cả các element trong mảng đều là giá trị chẵn.
 * Ban đầu sử dụng biến flag với giá trị mặc định là 1(true)
 * Để khẳng định các biến đều là chẵn. Duyệt các element trong array, nếu có trường hợp đặc biệt
 * xuất hiện phần tử lẻ, thay đổi flag với giá trị 0(false), và thoat ra khỏi vòng lặp
 */

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
