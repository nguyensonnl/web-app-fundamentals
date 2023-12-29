## Dom HTML

### Lấy hoặc thay đổi nội dung thẻ html

```javascript
const element = document.querySelector("selector");
//get
element.innerHTML;
element.outerHTML;
element.textContext;
//set
element.innerHTML = "value";
element.outerHTML = "value";
element.textContext = "value";
```

### Lấy hoặc thay đổi các thuộc tính thẻ html

```javascript
//attributeName: Tên thuộc tính
//get
document.querySelector("selector").attributeName;
document.querySelecotr("selector").getAttribute(attributeName);
//set
document.querySelector("selector").attributeName = "new value";
document.querySelector("selector").setAttribute(attributeName, value);
```
