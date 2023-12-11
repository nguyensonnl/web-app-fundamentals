function secondLargestNumber(arr) {
  let largest = arr[0];
  let second = null;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > largest && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondLargestNumber([1, 3, 1, 4, 6, 7]));
