export function escapeHTML(str) {
  return str
    .replace(/[&<>"'/]/g, function (match) {
      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      return map[match];
    })
    .trim();
}

export function isValidName(name) {
  return /^[A-Za-z\s]+$/.test(name);
}

export function isValidPhone(phone) {
  return /^[0-9]+$/.test(phone);
}
