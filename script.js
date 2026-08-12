function makeVisible(id) {
  document.querySelectorAll(".visible").forEach((visible) => {
    visible.classList.toggle("hidden", visible.id !== id);
  });
  document
    .querySelector("header")
    .classList.toggle("hidden", id !== "mainMenu");
}

document
  .getElementById("macrosButton")
  .addEventListener("click", () => makeVisible("macrosMenu"));

document
  .getElementById("settingsButton")
  .addEventListener("click", () => makeVisible("settingsMenu"));

document.querySelectorAll(".backButton").forEach((button) => {
  button.addEventListener("click", () => makeVisible(button.dataset.target));
});
