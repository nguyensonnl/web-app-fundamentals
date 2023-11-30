/**
 * Tách hàm
 * Kết hợp sử dụng if else for
 */

const form = document.querySelector("form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const confirmPassword = document.querySelector(".confirm-password");
console.log(confirmPassword.closest(".form-control"));

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
};

const checkRequired = (inputArr) => {
  let isRequired = false;
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
};

const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

function getFieldName(input) {
  return input.name;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let x = checkRequired([username, email, password, confirmPassword]);
  if (!x) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordMatch(password, confirmPassword);
  }
});
