### This

this trong js là từ khóa đề cập đến object mà nó thuộc về

**this trong 1 phương thức(object)**  
Trong phương thức, >this đề cập đến object chủ quản

```javascript
const person = {
  firstName: "Huyền",
  lastName: "Ngọc",
  age: 18,
  id: 1,

  getFullName() {
    return `${this.firstName} ${this.lastNames}`;
  },
};

console.log(person.getFullName()); // Ngọc Huyền
const handleFullName = person.getFullName; // Undefined undefined
console.log(handleFullName());
```

**This đứng một mình**  
Khi đưng 1 một mình:

- this đề cập đến global object
- Nếu là trình duyệt thì sẽ là [object window]

```javascript
x = this;
console.log(this);
```
