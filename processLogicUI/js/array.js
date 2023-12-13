const findSecondLargestNumber = (arr) => {
  let largest = arr[0];
  let second = null;
  let lengthArr = arr.length;

  for (let i = 0; i < lengthArr; i++) {
    if (arr[i] >= largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
};
console.log(findSecondLargestNumber([10, 9, 3, 1, 2, 4, 5]));
