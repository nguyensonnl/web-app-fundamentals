## Dom Element

- Element hay HTML Element đơn giản chỉ là những thẻ html

### Get One Element

```javascript
const selectorElement = document.querySelector("selector");
const idElement = document.getElementById("name id");
//get value
selectorElement.value;
idElement.value;
```

### Get multiple Element

```javascript
//HTML Colection:
const tagElement = document.getElementsByTagName("name tag") -
const classElement = document.getElementsByClassName("name class");
//get value
for(let i = 0; i < tagElement.length; i++){
    console.log(tagElement[i].value)
}

//Node List:
document.querySelectorAll("selector")
```
