const btnSignUp = document.querySelector(".btn-signup");
const allSelectorInput = document.querySelectorAll(".form-group input");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const rules = {
  username: {
    required: true,
  },
  email: {
    required: true,
    minLength: 3,
    email: true,
  },
  password: {
    required: true,
    minLength: 8,
  },
  password_confirm: {
    required: true,
    minLength: 8,
    equal_to: "password",
  },
};

//viết hàm
const methodRules = {
  required: (valueInput, paramsInput) => {
    return valueInput !== "";
  },
  minLength: (valueInput, paramsInput) => {
    return valueInput.length >= paramsInput;
  },
  email: (valueInput, paramsInput) => {
    return regexEmail.test(valueInput);
  },
  equal_to: (valueInput, paramsInput) => {
    let passSelector = document.querySelector("." + paramsInput);
    let valuePass = passSelector.value;
    return valuePass === valueInput;
  },
};

const messages = {
  name_required: "Tên không được để trống",
  email_required: "Email không được để trống",
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  for (const keyNameInput in rules) {
    let inputElement = document.querySelector("." + keyNameInput);
    let valueInput = inputElement.value;

    resetAllError(inputElement);

    //get key: value in object rules
    let ruleAllForInput = rules[keyNameInput];
    //console.log(ruleAllForInput);
    //loops key
    for (const ruleItemKey in ruleAllForInput) {
      let paramsInput = ruleAllForInput[ruleItemKey];

      let result = methodRules[ruleItemKey](valueInput, paramsInput);

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

const resetAllError = (inputElement) => {
  inputElement.nextElementSibling.textContent = "";
};

btnSignUp.addEventListener("click", handleSubmitForm);
