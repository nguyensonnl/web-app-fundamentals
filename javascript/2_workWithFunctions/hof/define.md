### Higher order function

- Là một function có thể nhận vào tham số là một function
- Return về một function

```javascript
const sum(a) => (b) => a + b;
const result = [1,2,3,4,5].map((item)=> item * item);
console.log(sum(1)(2));
console.log(result)
```
