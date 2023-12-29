/**
 * Sử dụng for kết hợp với if else
 * Khi mà code giống nhau, trùng lặp quá nhiều
 * Sử dụng hàm để trách lặp code
 * Tách hàm
 *
 * Validate cho từng fields(Từng ô input)
 * Trong từng fields check sẽ đính kèm các rules(quy tắc validate) của nó
 */

//get element
const btnSignUp = document.querySelector(".btn-signup");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const inputConfirmPassword = document.querySelector(".confirm_password");

const inputAllSelector = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorMessageAll = document.querySelectorAll(".error_message");

//func xử lý sự kiện + chạy lần đầu khi load
const handleSubmitForm = (e) => {
  e.preventDefault();
  let isFormValid = true;
  //1. validate

  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let valueInput = inputSelector.value;
    let divMessage = inputSelector
      .closest(".form-group")
      .querySelector(".error_message");
    let name = inputSelector.getAttribute("name");

    //validate empty
    if (name === "name") {
      let isRequiredValidate = requiredValidate(inputSelector, name);
      if (isRequiredValidate) resetValidate(inputSelector, divMessage);
    } else if (name === "email") {
      //validate email tối thiểu 3 ký tự\
      let isRequiredValidate = requiredValidate(inputSelector, name);
      let isMinLength;
      let isEmailRegexValid;

      if (isRequiredValidate) {
        isMinLength = minLengthValidate(inputSelector, name);
      }

      if (isRequiredValidate && isMinLength) {
        isEmailRegexValid = regexEmailValidate(inputSelector, name);
      }

      //validate sucesss
      if (isRequiredValidate && isMinLength && isEmailRegexValid) {
        resetValidate(inputSelector, divMessage);
      }

      //validate khác
    } else if (name === "password") {
      //validate password tối thiểu 8 ký tự

      let isMinLengthVavlid = minLengthValidate(
        inputSelector,
        name,
        "Password cần phải có tối thiểu 8 ký tự"
      );
      if (isMinLengthVavlid) {
        resetValidate(inputSelector, divMessage);
      }
    } else {
      let isRequiredValidate = requiredValidate(inputSelector, name);
      let isMinLength;
      let iscomparedPassword;

      if (isRequiredValidate) {
        isMinLength = minLengthValidate(inputSelector, name);
      }

      if (isMinLength && isRequiredValidate) {
        iscomparedPassword = comparePassword(inputSelector, name);
      }

      if (isRequiredValidate && isMinLength && iscomparedPassword) {
        resetValidate(inputSelector, divMessage);
      }
    }
  }

  for (let i = 0; i < errorMessageAll.length; i++) {
    if (errorMessageAll[i].textContent !== "") {
      isFormValid = false;
      break;
    }

    if (isFormValid) {
      window.location.href = `file:///E:/MyProject/webAppFundamentals/javascript/codelove/ecommerceJS/login.html`;
    }
  }
};

const comparePassword = (inputSelector, name, message) => {
  let isValid = true;
  let valueInput = inputSelector.value;

  let divMessage = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");

  let comparePassword = inputSelector.getAttribute("select_compare");
  let comparePasswordGet = document.querySelector("." + comparePassword);

  if (comparePasswordGet.value !== valueInput) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = name + "không trùng khớp với " + comparePassword;
    if (message) {
      divMessage = message;
    }
    divMessage.textContent = messageError;
  }
  return isValid;
};

const requiredValidate = (inputSelector, name, message) => {
  let isValid = true;
  let valueInput = inputSelector.value;
  let divMessage = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  if (valueInput === "") {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = name + " không được để trống";
    //inputSelector.name
    if (message) {
      divMessage = message;
    }

    divMessage.textContent = messageError;
  }
  return isValid;
};

const resetValidate = (inputSelector, divMessage) => {
  inputSelector.classList.remove("error");
  divMessage.textContent = "";
};

//regex email
const regexEmailValidate = (inputSelector, name, message) => {
  let isValid = true;
  let valueInput = inputSelector.value;
  let isValidRegex = regexEmail.test(valueInput);
  let divMessage = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");

  if (isValidRegex === false) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = `${name} không hợp lệ`;
    if (message) {
      divMessage = message;
    }
    divMessage.textContent = messageError;
  }
  return isValid;
};

//rule validate min length
const minLengthValidate = (inputSelector, name, message) => {
  let isValid = true;
  let minLength = inputSelector.getAttribute("minLength");
  let valueInput = inputSelector.value;
  let divMessage = inputSelector
    .closest(".form-group")
    .querySelector(".error_message");
  if (valueInput.length < minLength) {
    isValid = false;
    inputSelector.classList.add("error");
    let messageError = `${name} tối thiểu ${minLength} ký tự`;
    if (message) {
      divMessage.textContent = message;
    }
    divMessage.textContent = messageError;
  }
  return isValid;
};

//thêm sự kiện cho các element
btnSignUp.addEventListener("click", handleSubmitForm);
