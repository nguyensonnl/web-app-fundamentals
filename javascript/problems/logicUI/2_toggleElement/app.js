// const btn = document.querySelector(".btn-toggle");
// const contentEl = document.querySelector(".content");

// function handleToggleElement() {
//   contentEl.classList.toggle("hide");
// }
// btn.addEventListener("click", handleToggleElement);

function Toggle(options) {
  const container = options.container;
  const containerSelector = document.querySelector("." + container);

  const btnSelector = containerSelector.querySelector(".btn-toggle");
  const divSelectorToggle = containerSelector.querySelector(".content");

  function handleClickToggle() {
    divSelectorToggle.classList.toggle("hide");
  }

  function initEvent() {
    btnSelector.addEventListener("click", handleClickToggle);
  }

  initEvent();
}

let toggle1 = new Toggle({
  container: "toggle__container",
});

let toggle2 = new Toggle({
  container: "toggle__container2",
});
