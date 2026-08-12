function makeVisible(id) {
  document.querySelectorAll(".visible").forEach((visible) => {
    visible.classList.toggle("hidden", visible.id !== id);
  });
}

document
  .getElementById("macrosButton")
  .addEventListener("click", () => makeVisible("macrosMenu"));

document.querySelectorAll(".backButton").forEach((button) => {
  button.addEventListener("click", () => makeVisible(button.dataset.target));
});
