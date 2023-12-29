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
                        <button class="edit__cate" data-id=${
                          item.id
                        }>Edit</button>
                        <button class="delete__cate" data-id=${
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

function handleSumit(e) {
  e.preventDefault();

  const isValid = validation();
  if (isValid) {
    createNewCategory();
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
}

renderData();
btnElement.addEventListener("click", handleSumit);
tbodyElement.addEventListener("click", handleProcessAction);
