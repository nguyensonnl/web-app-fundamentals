const btnElement = document.querySelector(".btn__submit");
const cateElement = document.querySelector(".cate__name");
const tbodyElement = document.querySelector(".table__list");

const getCategories = () => {
  return JSON.parse(localStorage.getItem("categories")) || [];
};

const renderData = () => {
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
                        <button class="edit__cate btn btn-update" data-id=${
                          item.id
                        }>Edit</button>
                        <button class="btn btn-delete delete__cate" data-id=${
                          item.id
                        }>Delete</button>
                    </td>
                </tr
            `)
    );
  }

  tbodyElement.innerHTML = htmlResult;
};

const validation = () => {
  let isValid = true;
  const errorElement = cateElement
    .closest(".form-group")
    .querySelector(".form-error");

  if (cateElement.value === "") {
    isValid = false;
    errorElement.textContent = "Category name not empty";
  } else if (cateElement.value.length < 3) {
    isValid = false;
    errorElement.textContent = "Category must have 3 characters";
  } else {
    isValid = true;
    errorElement.textContent = "";
  }

  return isValid;
};

function createNewCategory() {
  const categories = getCategories();
  const newCategory = {
    id: Math.floor(Math.random() * 100),
    name: cateElement.value,
  };

  const updatedCategories = [newCategory, ...categories];
  localStorage.setItem("categories", JSON.stringify(updatedCategories));
  renderData();
  cateElement.value = "";
}

function updatedCatetory() {
  const categories = getCategories();
  const idCate = btnElement.getAttribute("data-id");

  const updatedCategory = categories.map((item) => {
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

  btnElement.textContent = "Submit";
  btnElement.removeAttribute("data-id");
  btnElement.classList.remove("update");
  cateElement.value = "";
}

function handleSumit(e) {
  e.preventDefault();

  const isValid = validation();
  if (isValid) {
    if (btnElement.classList.contains("update")) {
      updatedCatetory();
    } else {
      createNewCategory();
    }
  }
}

function handleProcessAction(e) {
  const clicked = e.target;
  const categories = getCategories();

  if (clicked.classList.contains("delete__cate")) {
    const isDelete = confirm("Bạn có chắc muốn xóa");
    if (isDelete === true) {
      const idCate = clicked.getAttribute("data-id");
      const updatedCategories = categories.filter(
        (item) => item.id !== +idCate
      );

      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      renderData();
      cateElement.value = "";
    }
  }

  if (clicked.classList.contains("edit__cate")) {
    const categories = getCategories();
    const idCate = clicked.getAttribute("data-id");
    btnElement.textContent = "Update";

    const categoryById = categories.find((item) => item.id === +idCate);
    cateElement.value = categoryById.name;

    btnElement.classList.add("update");
    btnElement.setAttribute("data-id", +idCate);
  }
}

renderData();
btnElement.addEventListener("click", handleSumit);
tbodyElement.addEventListener("click", handleProcessAction);
