import { saveContacts } from "../storage.js";

export function editContact(contacts, updatedContact) {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedContact };
    saveContacts(contacts);
  }
}
