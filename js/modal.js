const portfolioContainer = document.querySelector(".portfolio-items");
portfolioContainer.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log("e", event);
  const modalToggle = event.target.closest(".portfolio-link");
  console.log("modalToggle", modalToggle);
  if (!modalToggle) {
    return;
  }
  const modal = modalToggle.parentNode.nextElementSibling;

  console.log("modal", modal);
  if (!modal) {
    return;
  }
  modal.classList.add("is-open");
  const closeButton = modal.querySelector(".modal-close");
  closeButton.addEventListener("click", (ev) => {
    modal.classList.remove("is-open");
  });
});
