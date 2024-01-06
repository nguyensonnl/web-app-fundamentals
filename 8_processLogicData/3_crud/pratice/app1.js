const btnSubmit = document.querySelector(".btn__submit");
const inputElement = document.querySelector(".cate__name");
const tbodyElement = document.querySelector(".table__list");

function renderData() {
  const categories = getData();
  let htmlResult = "";

  if (categories && categories.length > 0) {
    categories.map(
      (item, idx) =>
        (htmlResult += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.name}</td>
                <td>
                    <button data-id=${
                      item.id
                    } class="edit btn btn-update">Edit</button>
                    <button class="delete btn btn-delete" data-id=${
                      item.id
                    }>Delete</button>
                </td>
            </tr>
            `)
    );
  }
  tbodyElement.innerHTML = htmlResult;
}

function updatedData(data) {
  return localStorage.setItem("categories", JSON.stringify(data));
}

function messageError(message) {
  const errorElement = inputElement
    .closest(".form-group")
    .querySelector(".form-error");
  return (errorElement.textContent = message);
}

function messageSuccess() {
  const errorElement = inputElement
    .closest(".form-group")
    .querySelector(".form-error");
  return (errorElement.textContent = "");
}

function getData() {
  return JSON.parse(localStorage.getItem("categories")) || [];
}

function resetForm() {
  return (inputElement.value = "");
}

function validation() {
  let isValid = true;
  if (inputElement.value === "") {
    isValid = false;
    messageError("Categories not empty");
  } else {
    isValid = true;
    messageSuccess();
  }

  return isValid;
}

function createNewCategory() {
  const categories = getData();
  const newCategory = {
    id: Math.floor(Math.random() * 1000),
    name: inputElement.value,
  };

  const updatedCategories = [newCategory, ...categories];
  localStorage.setItem("categories", JSON.stringify(updatedCategories));
  resetForm();
  renderData();
}

const handleSubmitForm = (e) => {
  e.preventDefault();

  const isValid = validation();
  if (isValid) {
    createNewCategory();
  }
};

function handleProcessAction(e) {
  const clicked = e.target;
  const categories = getData();
  if (clicked.classList.contains("delete")) {
    const idCate = clicked.getAttribute("data-id");
    const updatedCategories = categories.filter((item) => item.id !== +idCate);

    updatedData(updatedCategories);
    renderData();
  }
}

renderData();
btnSubmit.addEventListener("click", handleSubmitForm);
tbodyElement.addEventListener("click", handleProcessAction);
