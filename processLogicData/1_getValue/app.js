const btn = document.querySelector(".btn");

const handleSubmit = (event) => {
  event.preventDefault();
  //lấy ra object get theo key value

  //console.log(document.querySelector(".email").value);
  //console.log(document.querySelector(".password").value);
  //console.log(document.querySelector(".description").value);

  const allGender = document.querySelectorAll(".gender");
  const valueGender2 = document.querySelector(".gender:checked");
  let valueGender = "";
  for (let i = 0; i < allGender.length; i++) {
    if (allGender[i].checked) {
      valueGender = allGender[i].value;
    }
  }
  console.log(valueGender);

  const birthday = document.querySelector(".birthday").value;

  const allHobby = document.querySelectorAll(".hobby");
  const valueHobby = [];
  for (let i = 0; i < allHobby.length; i++) {
    if (allHobby[i].checked) {
      valueHobby.push(allHobby[i].value);
    }
  }
  console.log(valueHobby);
};

btn.addEventListener("click", handleSubmit);
