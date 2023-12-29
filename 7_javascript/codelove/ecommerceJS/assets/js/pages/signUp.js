/**
 * Only if else
 */

//get element
const btnSignUp = document.querySelector(".btn-signup");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const inputConfirmPassword = document.querySelector(".confirm_password");

//func xử lý sự kiện + chạy lần đầu khi load
const handleSubmitForm = (e) => {
  e.preventDefault();
  //1. validate

  //1.1 validate name
  let inputNameValue = inputName.value;
  let errorName = inputName
    .closest(".form-group")
    .querySelector(".error_message");

  if (inputNameValue === "") {
    inputName.classList.add("error");
    errorName.textContent = "Tên không được để trống";
  } else {
    inputName.classList.remove("error");
    errorName.textContent = "";
  }

  //1.2 validate email
  let intputEmailValue = inputEmail.value;
  let errorEmail = inputEmail
    .closest(".form-group")
    .querySelector(".error_message");

  if (intputEmailValue === "") {
    inputEmail.classList.add("error");
    errorEmail.textContent = "Email không được để trống";
  } else {
    inputEmail.classList.remove("error");
    errorEmail.textContent = "";
  }

  //1.3 validate password
  let intputPasswordValue = inputPassword.value;
  let errorPassword = inputPassword
    .closest(".form-group")
    .querySelector(".error_message");

  if (intputPasswordValue === "") {
    inputPassword.classList.add("error");
    errorPassword.textContent = "Password không được để trống";
  } else {
    inputPassword.classList.remove("error");
    errorPassword.textContent = "";
  }

  //1.4 validate confirm password
  let intputConfirmPasswordValue = inputConfirmPassword.value;
  let errorConfirmPassword = inputConfirmPassword
    .closest(".form-group")
    .querySelector(".error_message");

  if (intputConfirmPasswordValue === "") {
    inputConfirmPassword.classList.add("error");
    errorConfirmPassword.textContent = "Confirm password không được để trống";
  } else {
    inputConfirmPassword.classList.remove("error");
    errorConfirmPassword.textContent = "";
  }
};

//thêm sự kiện cho các element
btnSignUp.addEventListener("click", handleSubmitForm);
