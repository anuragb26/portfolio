const portfolioContainer = document.querySelector(".portfolio-items");
portfolioContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const modalToggle = event.target.closest(".portfolio-link");
  if (!modalToggle) {
    return;
  }
  const modal = modalToggle.parentNode.nextElementSibling;

  if (!modal) {
    return;
  }

  const modalOpen = () => {
    modal.classList.add("is-open");
    modal.style.animation = "modalIn 500ms forwards";
    document.body.style.overflowY = "hidden";
  };
  const modalClose = () => {
    modal.classList.remove("is-open");
    modal.removeEventListener("animationend", modalClose);
    document.body.style.overflowY = "scroll";
  };
  modalOpen();
  const closeButton = modal.querySelector(".modal-close");
  closeButton.addEventListener("click", (ev) => {
    modal.style.animation = "modalOut 500ms forwards";
    modal.addEventListener("animationend", modalClose);
  });
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      modal.style.animation = "modalOut 500ms forwards";
      modal.addEventListener("animationend", modalClose);
    }
  });
});
