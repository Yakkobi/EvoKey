function changeVisibility(id) {
  document.querySelectorAll(".visible").forEach((visible) => {
    visible.classList.toggle("hidden", visible.id !== id);
  });
  document
    .querySelector("header")
    .classList.toggle("hidden", id !== "mainMenu");
}

document
  .getElementById("macrosButton")
  .addEventListener("click", () => changeVisibility("macrosMenu"));

document
  .getElementById("settingsButton")
  .addEventListener("click", () => changeVisibility("settingsMenu"));

document.querySelectorAll(".mainMenuButton").forEach((button) => {
  button.addEventListener("click", () =>
    changeVisibility(button.dataset.target),
  );
});
