function showView(id) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("hidden", view.id !== id);
  });
}

document
  .getElementById("macrosButton")
  .addEventListener("click", () => showView("macrosMenu"));

document.querySelectorAll(".backButton").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.target));
});
