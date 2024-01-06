function parent(child) {
  let name = child();
  console.log(name);
}

parent(child);

function child() {
  const name = "Ngọc Huyền";
  return name;
}
