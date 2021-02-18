const menu = document.querySelector(".menu");
const button = document.querySelector(".button");

button.addEventListener("click", (event) => {
  const target = event.target;

  if (!button.classList.contains("active")) {
    button.classList.add("active");
    menu.classList.add("open");
  } else {
    button.classList.remove("active");
    menu.classList.add("close");
    setTimeout(() => {
      menu.classList.remove("open");
      menu.classList.remove("close");
    }, 800);
  }
});
