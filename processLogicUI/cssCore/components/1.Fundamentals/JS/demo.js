//Remove duplicate in array
const arrDupliate = [10, 10, 5, 6, 7, 8, 8, 10];
const resultDuplicate = arrDupliate.filter(
  (item, index) => arrDupliate.indexOf(item) === index
);
console.log(resultDuplicate);

//Sum array
const arrSum = [10, 9, 8, 1, 2, 4, 5];
const sumArray = arrSum.reduce((arr, item) => {
  return arr + item;
}, 0);

console.log(sumArray);

const product = [
  { id: 1, title: "Điện thoại a", price: 1, category: "Samsung" },
  { id: 2, title: "Điện thoại b", price: 4, category: "Iphone" },
  { id: 3, title: "Điện thoại c", price: 3, category: "Samsung" },
];

// const filterCate = product.filter((item) => item.price > 5000000);
// console.log(filterCate);

const sortByPrice = product.sort((a, b) => b.price - a.price);
console.log(sortByPrice);
