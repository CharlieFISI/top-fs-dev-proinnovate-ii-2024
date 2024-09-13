import { saveContacts } from "../storage.js";

export function deleteContact(contacts, id) {
  contacts.splice(id, 1);
  saveContacts(contacts);
}
