/**
 * Tìm phần tử nhỏ nhất đưa về đầu mảng
 * Sau đó tìm phần tử nhỏ nhì trong phần còn lại của mảng và đưa nó về vị trí thứ 2
 * và tiếp tục làm như vậy cho đến khi hết mảng
 */

const seletionSort = (arr) => {
  let length = arr.length;
  let min;
  for (let i = 0; i < length; i++) {
    min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

console.log(seletionSort([5, 4, 6, 3, 7, 1]));

console.log([5, 4, 6, 3, 7, 1].sort());
