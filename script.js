function showVisible(id) {
  document.querySelectorAll(".visible").forEach((visible) => {
    visible.classList.toggle("hidden", visible.id !== id);
  });
}

document
  .getElementById("macrosButton")
  .addEventListener("click", () => showVisible("macrosMenu"));

document.querySelectorAll(".backButton").forEach((button) => {
  button.addEventListener("click", () => showVisible(button.dataset.target));
});
