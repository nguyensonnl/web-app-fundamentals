### Css for placehoder input, textara

```css
.input::-webkit-input-placeholder {
  color: red;
}
.input::-moz-input-placeholder {
  color: red;
}
```

### Ẩn icon mũi tên ở input có type là number

```css
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```
