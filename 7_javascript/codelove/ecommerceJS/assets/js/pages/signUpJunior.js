//get element
const btnSignUp = document.querySelector(".btn-signup");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const inputAllSelector = document.querySelectorAll(".form-group input");

const rules = {
  name: {
    required: true,
  },
  email: {
    required: true,
    minlength: 3,
    email: true,
  },
  password: {
    required: true,
    minlength: 8,
  },
  confirm_password: {
    required: true,
    minlength: 8,
    equal_to: "password",
  },
};

const methodsRule = {
  required: (valueInput, paramsInput) => {
    return valueInput !== "";
  },
  minlength: function (valueInput, paramsInput) {
    return valueInput.length >= paramsInput;
  },
  email: function (valueInput, paramsInput) {
    return regexEmail.test(valueInput);
  },
  equal_to: function (valueInput, paramsInput) {
    let passSelector = document.querySelector("." + paramsInput);
    let valuePass = passSelector.value;
    return valuePass === valueInput;
  },
};

const messages = {
  name_required: "Tên không được để trống",
  email_required: "Email không được để trống",
};

//func xử lý sự kiện + chạy lần đầu khi load
const handleSubmitForm = (e) => {
  e.preventDefault();

  for (const keyNameInput in rules) {
    let inputElement = document.querySelector(`.${keyNameInput}`);
    let valueInput = inputElement.value;

    resetAllError(inputElement);

    let ruleAllForInput = rules[keyNameInput];
    for (ruleItemKey in ruleAllForInput) {
      let paramsInput = ruleAllForInput[ruleItemKey];
      let result = methodsRule[ruleItemKey](valueInput, paramsInput);
      let keyMessage = keyNameInput + "_" + ruleItemKey;

      if (!result) {
        showMessageError(inputElement, keyMessage, keyNameInput);
        break;
      }
    }
  }
};

function showMessageError(inputElement, keyMessage, keyNameInput) {
  let message = keyNameInput + " not valid";
  inputElement.classList.add("error");
  if (messages[keyMessage]) {
    message = messages[keyMessage];
  }
  inputElement.nextElementSibling.textContent = message;
}

function resetAllError(inputElement) {
  inputElement.classList.remove("error");
  inputElement.nextElementSibling.textContent = "";
}

//thêm sự kiện cho các element
btnSignUp.addEventListener("click", handleSubmitForm);
