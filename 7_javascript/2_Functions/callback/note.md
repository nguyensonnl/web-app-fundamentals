- Là 1 function
- Được truyền vào 1 function khác như 1 tham số
- Sẽ được gọi lại trong function có tham số là function

```javascript
const num = [1,2,3,4,5];
num.forEach((item, index)=>{
    console.log('STT': index, "la", item);
})
const result = num.map((item, index)=>`STT: ${index} la ${item}`)
```
