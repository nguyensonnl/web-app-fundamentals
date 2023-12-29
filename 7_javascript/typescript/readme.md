### type annotations

- number: Đại diện cho số, có thể là số nguyên(integer) hoặc số thực(float, double)
- bigint
- boolean: Đại diện cho giá trị true hoặc false
- string: Đại diện cho các chuỗi kỹ tự
- void: Thường được sử dụng cho các hàm không trả về giá trị
- null: Được sử dụng khi một đối tượng không có bất kỳ giá trị nào
- undefined: Biểu thị giá trị được cung cấp cho biến chưa được khởi tạo
- any: Nếu biến được khai báo với bất kỳ kiểu dữ liệu nào, thì bất kỳ kiểu giá trị nào cũng có thể được gán cho biến đó
- never: Không chứa giá trị, không thể gán giá trị

- Type Inference

### string literal types

```typescript
type MouseEvent: "click" | "dbClick" | 'mouseup' | 'mousedounw';
let mouseEvent: MouseEvent;
mouseEvent = "click";
```

### type aliases

```typescript
type alphanumberic = number | string;
let input: alphanumberic;
input = 10;
input = "Hello";
```

### Type Assertion

```typescript
let code: any = 123;
let employeeCode: number = code;
let employeeCode = <number>code;

interface Employee {
  name: string;
  code: number;
}
let employee: Employee = {};
let employee = <Employee>{};
employee.name = "Ngọc Huyền";
employee.code = 123;

let code: any = 123;
let employeeCode = <number>code;

let code: any = 123;
let employeeCode = code as number;
```
