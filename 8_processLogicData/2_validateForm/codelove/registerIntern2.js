/*
- Chỉ sử dụng if else
- Vấn đề: Hằng chục, hằng trăm field sẽ như thế nào
*/

const btnSignUp = document.querySelector(".btn-signup");
const usernameElement = document.querySelector(".username");
const emailElement = document.querySelector(".email");
const passwordElement = document.querySelector(".password");
const confirmPasswordElement = document.querySelector(".password_confirm");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Viết hàm
const checkRequired = (element) => {
  let isValid = true;
  if (element.value === "") {
    errorMessage(element, "required not empty");
    isValid = false;
  } else {
    successMessage(element);
  }
  return isValid;
};

const checkLength = (element, length) => {
  let isValid = true;
  if (element.value.length < length) {
    errorMessage(element, `at least ${length} character`);
    isValid = false;
  } else {
    successMessage(element);
  }
  return isValid;
};

const checkMatch = (element, element2) => {
  if (element.value !== element2.value) {
    errorMessage(element, "Not match");
  }
};

const emailFormat = (element) => {
  let isValid = true;
  if (!regexEmail.test(element.value)) {
    errorMessage(element, "Email not right format");
    isValid = false;
  } else {
    successMessage(element);
  }
  return isValid;
};

const errorMessage = (element, message) => {
  const errorEmailElement = element
    .closest(".form-group")
    .querySelector(".error");

  errorEmailElement.textContent = message;
};

const successMessage = (element) => {
  const errorEmailElement = element
    .closest(".form-group")
    .querySelector(".error");

  errorEmailElement.textContent = "";
};

//handle action form
const handleSubmitForm = (e) => {
  e.preventDefault();

  //Username
  checkRequired(usernameElement);

  //Email
  let emailRequired = checkRequired(emailElement);
  if (emailRequired) {
    emailFormat(emailElement);
  }

  //password
  let passwordValid = checkRequired(passwordElement);
  if (passwordValid) {
    checkLength(passwordElement, 6);
  }

  //confirm password
  let password2Required = checkRequired(confirmPasswordElement);
  let password2Length;

  if (password2Required) {
    password2Length = checkLength(confirmPasswordElement, 6);
  }

  if (password2Length && password2Required) {
    checkMatch(passwordElement, confirmPasswordElement);
  }
};

btnSignUp.addEventListener("click", handleSubmitForm);
