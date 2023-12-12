const btnCategoryAdd = document.querySelector(".btn__category");
const categoryElement = document.querySelector(".category__name");
const tbodyElement = document.querySelector(".category__table");

const showDataCategoryFromLocal = () => {
  //1. Láy toàn bộ danh mục trong local
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  //2. Xây dựng cấu trúc html cho danh mục
  let htmlResult = "";

  categories.map(
    (item, idx) =>
      (htmlResult += `
          <tr>
           <td>${idx + 1}</td>
           <td>${item.name}</td>
           <td>
             <button data-id=${item.id} class="btn__edit">Edit</button>
             <button data-id=${item.id} class="btn__delete">Delete</button>
           </td>
          </tr>
      `)
  );

  //3. Đưa kết quả danh mục vào tbody của table
  tbodyElement.innerHTML = htmlResult;
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  if (btnCategoryAdd.classList.contains("update")) {
    updateCategory();
  } else {
    addCategory();
  }
};

function updateCategory() {
  //1. Get value
  const categoryName = categoryElement.value;
  //2. Tạo ra dữ liệu update
  //lấy id
  const idUpate = btnCategoryAdd.getAttribute("data-id");
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const categoriesUpdate = categories.map((item) => {
    if (item.id === +idUpate) {
      return {
        id: item.id,
        name: categoryName,
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("categories", JSON.stringify(categoriesUpdate));
  showDataCategoryFromLocal();

  //reset form
  categoryElement.value = "";
  btnCategoryAdd.textContent = "Submit";
  btnCategoryAdd.removeAttribute("data-id");
  btnCategoryAdd.classList.remove("update");
}

function addCategory() {
  //1. Get value
  const categoryName = categoryElement.value;

  //2. Tạo ra object chứa thông tin danh mục
  const newCategory = {
    id: Math.floor(Math.random() * 100),
    name: categoryName,
  };

  //3. Đưa object vào trong mảng category
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const categoriesUpdated = [newCategory, ...categories];

  //4. Lưu local
  localStorage.setItem("categories", JSON.stringify(categoriesUpdated));

  //5. Hiển thị dữ liệu ngay lập tức khi thêm thành công
  showDataCategoryFromLocal();

  //6. reset form

  categoryElement.value = "";
}

function handleProcessData(e) {
  const clicked = e.target;
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  //action delete
  if (clicked.classList.contains("btn__delete")) {
    const idDelete = clicked.getAttribute("data-id");
    const categoriesFilter = categories.filter((item) => item.id !== +idDelete);

    //lưu vào local
    localStorage.setItem("categories", JSON.stringify(categoriesFilter));

    //re-render app
    showDataCategoryFromLocal();
  }
  //action edit
  else if (clicked.classList.contains("btn__edit")) {
    //1. get id element edit
    const idUpdate = clicked.getAttribute("data-id");
    //2. get object element theo id êdit
    const elementEditing = categories.find((item) => item.id === +idUpdate);

    //3. Đưa name lên ô input đang chỉnh sửa
    categoryElement.value = elementEditing.name;

    //4. Chỉnh sửa để người dùng nhận biết hiện tại đang edit form
    //4.1 Thay đổi text button đến update
    btnCategoryAdd.textContent = "Update";
    //4.2 Thêm class để biết là update
    btnCategoryAdd.classList.add("update");
    //4.3 Thêm id để biết update cho object vào
    btnCategoryAdd.setAttribute("data-id", idUpdate);
  }
}

showDataCategoryFromLocal();
btnCategoryAdd.addEventListener("click", handleSubmitForm);
tbodyElement.addEventListener("click", handleProcessData);
