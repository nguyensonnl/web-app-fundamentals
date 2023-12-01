/**
 * Tìm kiếm tuần tự:
 * Duyệt qua từng phần tử của mảng theo thứ tự cho đến khi tìm thấy phần tử cần tìm hoặc duyệt qua toàn bộ mảng
 */

const linearSearh = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return -1;
};

const arr = [1, 4, 5, 3, 5, 6, 3, 2];
const result = linearSearh(arr, 5);
if (result === -1) {
  console.log("Không tim thấy");
} else {
  console.log(result);
}
