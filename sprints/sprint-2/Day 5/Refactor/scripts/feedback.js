export function showError(element, message) {
  const error = document.createElement("span");
  error.classList.add("error");
  error.textContent = message;
  element.insertAdjacentElement("afterend", error);
  setTimeout(() => {
    error.remove();
  }, 1500);
}
