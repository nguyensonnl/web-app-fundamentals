//Input: [1, 2, 3, 2, 4, 5, 7, 1]
//Output: [1, 2, 3, 4, 5, 7]

const removeDuplicateElementUsingSet = (arr) => {
  return [...new Set(arr)];
};

const removeDuplicateElementUsingFilter = (arr) => {
  return arr.filter((el, idx) => arr.indexOf(el) === idx);
};

//So sánh value các cặp liền kề
const removeDuplicateElement = (arr) => {
  let uniqueElement = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] === currentElement) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueElement.push(currentElement);
    }
  }
  return uniqueElement;
};
console.log(removeDuplicateElement([1, 2, 3, 2, 4, 5, 7, 1]));

const getValueElementFirstDuplicate = (arr) => {};
