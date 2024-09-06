import { saveContacts } from "../storage.js";

export function addContact(contacts, contact) {
  contacts.push(contact);
  saveContacts(contacts);
}
