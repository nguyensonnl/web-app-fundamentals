const findLargestNumber = (arr) => {
  let max = arr[0];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findLargestNumber([1, 2, 3, 4, 10, 5]));
