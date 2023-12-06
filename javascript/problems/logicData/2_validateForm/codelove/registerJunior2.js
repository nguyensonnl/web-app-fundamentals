/**
 * func, if, else
 */

//get element
const btnRegister = document.querySelector(".btn-signup");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password_confirm = document.querySelector(".password_confirm");

const errorMessage = (element, message) => {
  let errorSelector = element.parentElement.querySelector(".error");
  console.log(message);
  if (message) {
    errorSelector.textContent = message;
  } else {
    errorSelector.textContent = `${element.getAttribute(
      "name"
    )} required not empty`;
  }
};

const requiredElemet = (element) => {
  let isRequired = false;
  element.forEach((el) => {
    if (el.value.trim() === "") {
      errorMessage(el);
      isRequired = true;
    } else {
      successMesssage(el);
    }
  });
  return isRequired;
};

const checkedLength = (element, min, max) => {
  if (element.value.length < min) {
    let message = element.getAttribute("name");
    errorMessage(element, `${message} required at least ${min} character`);
  } else if (element.value.length > max) {
    let message = element.getAttribute("name");
    errorMessage(element, `${message} required max only ${max} character`);
  } else {
    successMesssage(element);
  }
};

const successMesssage = (element) => {
  let errorSelector = element.parentElement.querySelector(".error");
  errorSelector.textContent = "";
};

/**
 * Check required hết rồi mới check các rule còn lại
 */

const handleSubmitForm = (e) => {
  e.preventDefault();

  let x = requiredElemet([username, email, password, password_confirm]);
  if (!x) {
    checkedLength(password, 3, 8);
  }
};

btnRegister.addEventListener("click", handleSubmitForm);
