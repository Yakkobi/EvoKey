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

function normalizeKeyInputs(e) {
  if (e.code === "ControlLeft" || e.code === "ControlRight") return "Ctrl";
  if (e.code === "AltLeft" || e.code === "AltRight") return "Alt";
  if (e.code === "ShiftLeft" || e.code === "ShiftRight") return "Shift";
  if (e.code.startsWith("Key")) return e.code.slice(3);
  return e.key.toUpperCase();
}

const heldKeys = new Set();
const keyComboDisplay = document.getElementById("keyComboDisplay");

document.addEventListener("keydown", (e) => {
  heldKeys.add(normalizeKeyInputs(e));
  keyComboDisplay.textContent = [...heldKeys].join(" + ");
});

document.addEventListener("keyup", (e) => {
  heldKeys.delete(normalizeKeyInputs(e));
});
