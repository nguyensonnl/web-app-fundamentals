let loginForm = document.querySelector("#loginForm");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let msgName = document.querySelector("#msgName");
let msgEmail = document.querySelector("#msgEmail");
let tasks = document.querySelector("#tasks");
let deleteTask = document.querySelector("button");
let submit = document.querySelector("#submit");

let data = [];

let renderData = () => {
  tasks.innerHTML = "";

  data.map(
    (item, index) =>
      (tasks.innerHTML += `
      <tr>
      <th scope="row">${item.id}</th>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>
        <button class="btn btn-success">Update</button>
        <button class="btn btn-danger btn-delete" data-id="${item.id}" onclick="handleDelete()">Delete</button>
      </td>
    </tr>
      `)
  );
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formValdation();
});

function formValdation() {
  if (inputName.value === "") {
    msgName.innerHTML = "Tên không được để trống";
  } else {
    addData();
  }
}

let addData = () => {
  data = [
    ...data,
    {
      id: Math.floor(Math.random() * 100),
      name: inputName.value,
      email: inputEmail.value,
    },
  ];

  renderData();
  resetForm();
};

function handleDelete() {
  const btnDelete = document.querySelector(".btn-delete");
  const id = btnDelete.getAttribute("data-id");
  const idNumber = +id;

  data = data.filter((item) => item.id !== idNumber);
  renderData();
  resetForm();
}

function resetForm() {
  inputEmail.value = "";
  inputName.value = "";
}

//renderData();
