const btnSignUp = document.querySelector(".btn-signup");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".password-confirm");

const showError = (inputSelector, message) => {
  let errorSelector = inputSelector.parentElement.querySelector(".error");
  errorSelector.textContent = message;
};

const showSuccess = (inputSelector) => {
  let errorSelector = inputSelector.parentElement.querySelector(".error");
  errorSelector.textContent = "";
};

const requiredValidate = (inputSelector, message) => {
  let valid = true;
  const inputvalue = inputSelector.value;
  if (inputvalue === "") {
    showError(inputSelector, message);
    valid = false;
  } else {
    showSuccess(inputSelector);
  }

  return valid;
};

const lengthValidate = (inputSelector, message) => {
  let valid = true;
  const inputValue = inputSelector.value;
  if (inputValue.length < 8) {
    valid = false;
    showError(inputSelector, message);
  } else {
    showSuccess(inputSelector);
  }
  return valid;
};

const handleSignUpForm = (e) => {
  e.preventDefault();

  requiredValidate(username, "Username không được để trống");

  requiredValidate(email, "Email không được để trống");

  let required = requiredValidate(password, "Password không được để trống");
  let length;
  if (required) {
    length = lengthValidate(password, "Password tổi thiểu 8 ký tự");
  }

  requiredValidate(confirmPassword, "Confirm password không được để trống");
};

btnSignUp.addEventListener("click", handleSignUpForm);
