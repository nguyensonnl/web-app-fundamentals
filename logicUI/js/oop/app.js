class Student {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }
}

class UI {
  static add(student, order = undefined) {
    const tr = document.createElement("tr");
    const listStudent = Store.getList();
    tr.innerHTML = `
    <td>${order === undefined ? listStudent.length + 1 : order}</td>
    <td>${student.name}</td>
    <td>${student.birthday}</td>
    <td><button class="btn">Xóa</button></td>
    `;

    document.querySelector("table tbody").appendChild(tr);
  }

  static render() {
    const listStudent = Store.getList();
    listStudent.forEach((student, index) => {
      this.add(student, index + 1);
    });
  }

  static clearAll() {
    document.querySelector("table tbody").innerHTML = "";
  }
}

//ACtion
class Store {
  static getList() {
    return JSON.parse(localStorage.getItem("student")) || [];
  }

  static add(student) {
    let listStudent = this.getList();
    listStudent = [{ ...student }, ...listStudent];
    localStorage.setItem("student", JSON.stringify(listStudent));
  }

  static remove(index) {
    let listStudent = this.getList();
    listStudent.splice(index, 1);
    localStorage.setItem("student", JSON.stringify(listStudent));
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const birthday = document.getElementById("birthday");

  const student = new Student(name.value, birthday.value);
  UI.add(student);
  Store.add(student);
  name.value = "";
  birthday.value = "";
});

UI.render();

document.querySelector("table tbody").addEventListener("click", (e) => {
  //check and get value
  if (e.target.classList.contains("btn")) {
    const tr = e.target.parentElement.parentElement;
    const name = tr.children[1].textContent;
    const index = +(tr.children[0].textContent - 1);
    const isCheck = confirm(`You wanna delete ${name} ?`);
    if (isCheck) {
      Store.remove(index);
      UI.clearAll();
      UI.render();
    }
  }
});
