const btnSubmit = document.querySelector(".btn__submit");
const inputElement = document.querySelector(".cate__name");
const tbodyElement = document.querySelector(".table__list");

function errorMessage(message) {
  const errorElement = inputElement
    .closest(".form-group")
    .querySelector(".form-error");
  errorElement.textContent = message;
}

function successMessage() {
  const errorElement = inputElement
    .closest(".form-group")
    .querySelector(".form-error");
  errorElement.textContent = "";
}

function validationForm() {
  let isValid = true;
  if (inputElement.value === "") {
    isValid = false;
    errorMessage("Field required not empty");
  } else if (inputElement.value.length < 3) {
    isValid = false;
    errorMessage("Field required at least 3 character");
  } else {
    successMessage();
  }
  return isValid;
}

function getCategories() {
  return JSON.parse(localStorage.getItem("categories")) || [];
}

function resetForm(element) {
  return (element.value = "");
}

function createNewCategory() {
  const categories = getCategories();
  const newCategory = {
    id: Math.floor(Math.random() * 1000),
    name: inputElement.value,
  };

  const updatedCategories = [newCategory, ...categories];
  localStorage.setItem("categories", JSON.stringify(updatedCategories));
  resetForm(inputElement);
  renderData();
}

function renderData() {
  const categories = getCategories();
  let htmlResult = "";

  if (categories && categories.length > 0) {
    categories.map(
      (item, idx) =>
        (htmlResult += `
        <tr>
            <td>${idx + 1}</td>
            <td>${item.name}</td>
            <td>
                <button class="edit" data-id=${item.id}>Edit</button>
                <button class="delete" data-id=${item.id}>Delete</button>
            </td>
        </tr
    `)
    );
  }
  tbodyElement.innerHTML = htmlResult;
}

function updatedCategory() {
  const categories = getCategories();
  const idCate = btnSubmit.getAttribute("data-id");

  const updatedCategory = categories.map((item) => {
    if (item.id === +idCate) {
      return {
        id: +idCate,
        name: inputElement.value,
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("categories", JSON.stringify(updatedCategory));
  renderData();
  resetForm(inputElement);

  btnSubmit.removeAttribute("data-id");
  btnSubmit.classList.remove("update");
  btnSubmit.textContent = "Submit";
}

function handleSubmitForm(e) {
  e.preventDefault();

  const isValidForm = validationForm();
  if (isValidForm) {
    if (btnSubmit.classList.contains("update")) {
      updatedCategory();
    } else {
      createNewCategory();
    }
  }
}

function handleProcessAction(e) {
  const clicked = e.target;

  if (clicked.classList.contains("edit")) {
    const categories = getCategories();
    const idCate = clicked.getAttribute("data-id");

    const category = categories.find((item) => item.id === +idCate);
    inputElement.value = category.name;

    btnSubmit.textContent = "Update";
    btnSubmit.classList.add("update");
    btnSubmit.setAttribute("data-id", +idCate);
  }

  if (clicked.classList.contains("delete")) {
    const categories = getCategories();
    const idCate = clicked.getAttribute("data-id");

    const updatedCategories = categories.filter((item) => item.id !== +idCate);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    renderData();
  }
}

renderData();
btnSubmit.addEventListener("click", handleSubmitForm);
tbodyElement.addEventListener("click", handleProcessAction);
