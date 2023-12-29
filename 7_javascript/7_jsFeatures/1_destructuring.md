### Destructuring

- Gán các thuộc tính của một object hay một array

```javascript
let obj = {
  a: 1,
  b: 2,
};

let a = obj.a;
let b = obj.b;
let { a, b, c } = obj;
// c = undefined

let arr = [1, 2, 3, 4, 5];
let [a, b, c, , , e] = arr;
```

- Có thể dùng destructuring khi nhận giá trị trả về từ 1 function là Object hay array

```javascript
// Object
function funcA() {
  return {
    a: 1,
    b: 2,
    c: () => {},
  };
}

let { a, b, c } = funcA();
// c là một function

// Array
function funcB() {
  return [1, 2, 3, 4, 5, 6];
}

const [a, b, c, d, , , g] = funcB();
```

- Hoặc có thể từ tham số truyền vào 1 function

```javascript
 // Object
    function funcA({ a, b, c }) {
        // c là một function
        ....
    }

    funcA({
            a: 1,
            b: 2,
            c: () => {}
        })

    // Array
    function funcB([a,b,c,d]) {
        ....
    }

    funcB([1,2,3,4,5,6,7])
```
