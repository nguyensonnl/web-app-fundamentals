const btnCateElement = document.querySelector(".btn-cate");
const tbodyElement = document.querySelector(".list-cate");
const cateElement = document.querySelector(".category-name");
const tableElement = document.querySelector(".table-category");

function renderData() {
  let htmlResult = "";
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  if (categories && categories.length > 0) {
    categories.map(
      (value, idx) =>
        (htmlResult += `
            <tr>
            <td>${idx + 1}</td>
            <td>${value.name}</td>
            <td>
                <button class="edit" data-id=${value.id}>Edit</button>
                <button data-id=${value.id} class="delete">Delete</button>
            </td>
            </tr>
            `)
    );
  }
  tbodyElement.innerHTML = htmlResult;
}

function validateCategory() {
  let isValid = true;

  const errorElement = cateElement
    .closest(".form-group")
    .querySelector(".form-error");

  if (cateElement.value === "") {
    isValid = false;
    errorElement.textContent = "Category không được để trống";
  } else {
    errorElement.textContent = "";
  }

  return isValid;
}

function createNewCategory() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const newCategory = {
    id: Math.floor(Math.random() * 100),
    name: cateElement.value,
  };
  const updatedCategories = [newCategory, ...categories];
  localStorage.setItem("categories", JSON.stringify(updatedCategories));
  renderData();
  cateElement.value = "";
}
const btnSubmitForm = (e) => {
  e.preventDefault();

  const isValidForm = validateCategory();
  if (isValidForm) {
    if (btnCateElement.classList.contains("update")) {
      updatedCategory();
    } else {
      createNewCategory();
    }
  }
};

function updatedCategory() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const idCate = btnCateElement.getAttribute("data-id");

  const updatedCategory = categories.map((item, idx) => {
    if (item.id === +idCate) {
      return {
        id: +idCate,
        name: cateElement.value,
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("categories", JSON.stringify(updatedCategory));
  renderData();

  btnCateElement.classList.remove("update");
  btnCateElement.removeAttribute("data-id");
  btnCateElement.textContent = "Submit";
  cateElement.value = "";
}

function handleAction(e) {
  const clicked = e.target;

  if (clicked.classList.contains("delete")) {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    const getIDCate = clicked.getAttribute("data-id");

    const updatedCategories = categories.filter(
      (item, idx) => item.id !== +getIDCate
    );

    localStorage.setItem("categories", JSON.stringify(updatedCategories));

    renderData();
  }

  if (clicked.classList.contains("edit")) {
    const categories = JSON.parse(localStorage.getItem("categories"));
    const idCate = clicked.getAttribute("data-id");
    console.log(idCate);
    btnCateElement.setAttribute("data-id", +idCate);
    btnCateElement.textContent = "Update";
    btnCateElement.classList.add("update");
    const getCategoryById = categories.find((item) => item.id === +idCate);

    cateElement.value = getCategoryById.name;
  }
}

renderData();
btnCateElement.addEventListener("click", btnSubmitForm);
tableElement.addEventListener("click", handleAction);
