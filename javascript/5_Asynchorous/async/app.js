function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback();
  document.body.append(script);
}

loadScript("./hello.js", () => {
  console.log("Check");
});
