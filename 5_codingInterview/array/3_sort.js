// using method sort in js
const result = arr.sort((a, b) => b - a);
console.log(result);

//so sánh các cặp liền kề -> hoán vị thỏa điều kiện
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sort([2, 3, 5, 1, 2]));
