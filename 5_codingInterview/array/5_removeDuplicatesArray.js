//Using a temporary array
function removeElementDuplicateUsingTemporaryArray(arr) {
  return arr.filter((value, idx, self) => self.indexOf(value) === idx);
}
const arr = [1, 1, 2, 2, 4, 3, 5, 3, 5, 2, 3, 2];
const result = removeElementDuplicateUsingTemporaryArray(arr);
console.log(result);

//Using method filter Method
function removeElementDuplicateUsingFilter(arr) {
  return arr.filter((value, idx) => arr.indexOf(value) === idx);
}
const arr1 = [1, 1, 2, 2, 3, 3, 4, 3, 2, 1];
const result1 = removeElementDuplicateUsingFilter(arr1);
console.log(result1);

//Using the set Objects
function removeElementDuplicateUsingSet(arr) {
  return [...new Set(arr)];
}
const arr2 = [1, 1, 2, 4, 2, 4, 5];
const result2 = removeElementDuplicateUsingSet(arr2);
console.log(result2);
