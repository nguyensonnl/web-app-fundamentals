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

function handleSubmitForm(e) {
  e.preventDefault();

  const isValidForm = validationForm();
  if (isValidForm) {
    createNewCategory();
  }
}

renderData();
btnSubmit.addEventListener("click", handleSubmitForm);
