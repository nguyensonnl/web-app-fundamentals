//sync
console.log("Hello world");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("done");

//async
console.log("Hello world");
for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}
console.log("Done");
