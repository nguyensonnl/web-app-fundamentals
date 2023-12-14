### CSS Font

```css
.box {
  font-weight: bold;
  font-style: italic;
  font-variant: small-caps;
  font-size: 1.5rem;
  line-height: 200%;
  font-family: "Courier New", Courier, monospace;
}

.box {
  font: bold italic small-caps 1.5rem/200% "Courier New", Courier, monospace;
}
```

### Text overflow with ...

```css
.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### Multiple line with 3 dots ...

```css
.text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### Gradient text

```css
.text {
  background-image: linear-gradient(to right, #ffa440, #00aefc);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
```
