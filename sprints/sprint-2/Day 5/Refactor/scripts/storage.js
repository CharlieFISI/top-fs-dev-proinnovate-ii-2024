export function getContacts() {
  const storedContacts = localStorage.getItem("contacts");
  return storedContacts ? JSON.parse(storedContacts) : [];
}

export function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
