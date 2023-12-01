const bubbleSort = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        //  [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const result = bubbleSort([5, 2, 3, 4, 5, 3, 2]);
console.log(result);

const result2 = [5, 2, 3, 4, 5, 3, 2].sort();
console.log(result2);
