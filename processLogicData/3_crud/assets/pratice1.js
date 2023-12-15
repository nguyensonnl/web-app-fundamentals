const btnSubmit = document.querySelector(".btn__category");
const nameCategory = document.querySelector(".category__name");
const tbodyElement = document.querySelector(".category__table");

const renderData = () => {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  let htmlResult = "";

  if (categories && categories.length > 0) {
    categories.map(
      (cate, idx) =>
        (htmlResult += `
        <tr>
            <td>${idx + 1}</td>
            <td>${cate.name}</td>
            <td>
                <button class="edit" data-id=${cate.id}>Edit</button>
                <button class="delete" data-id=${cate.id}>Delete</button>
            </td>
        </tr>`)
    );
  } else {
    htmlResult += "<div style='text-align:center'>No data available</div>";
  }

  tbodyElement.innerHTML = htmlResult;
};

const validateCategory = (element) => {
  let isValid = true;
  const errorElement = nameCategory
    .closest(".form__group")
    .querySelector(".error");
  if (element.value === "") {
    isValid = false;
    errorElement.textContent = "Category không được để trống";
  } else if (element.value.length < 3) {
    isValid = false;
    errorElement.textContent = "Category phải ít nhất 3 ký tự";
  } else {
    errorElement.textContent = "";
  }
  return isValid;
};

const createNewCategory = (element) => {
  const cate = element.value;
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  const newCategory = {
    id: Math.floor(Math.random() * 100),
    name: cate,
  };

  const updatedCategory = [newCategory, ...categories];

  localStorage.setItem("categories", JSON.stringify(updatedCategory));

  renderData();

  element.value = "";
};

const handleProcessAction = (e) => {
  const clicked = e.target;
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  if (clicked.classList.contains("delete")) {
    const idCate = clicked.getAttribute("data-id");
    let updatedCategories;
    updatedCategories = categories.filter((cate) => cate.id !== +idCate);

    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    renderData();
  }
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  const isValidForm = validateCategory(nameCategory);
  if (isValidForm) {
    createNewCategory(nameCategory);
  }
};

renderData();
btnSubmit.addEventListener("click", handleSubmitForm);
tbodyElement.addEventListener("click", handleProcessAction);
