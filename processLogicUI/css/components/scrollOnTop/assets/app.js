const mybtn = document.getElementById("btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    mybtn.classList.add("show");
  } else {
    mybtn.classList.remove("show");
  }
});

mybtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
