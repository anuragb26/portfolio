const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", (ev) => {
  document.body.classList.toggle("nav-is-open");
});

nav.addEventListener("click", (ev) => {
  document.body.classList.remove("nav-is-open");
});
