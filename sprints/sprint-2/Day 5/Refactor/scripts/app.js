import { escapeHTML, isValidName, isValidPhone } from "./utils.js";
import { getContacts } from "./storage.js";
import { showError } from "./feedback.js";
import {
  addContact,
  updateContactList,
  editContact,
  deleteContact,
  filterContacts,
} from "./contact.js";

const contacts = getContacts();
const contactList = document.getElementById("contactList");
const filterInput = document.getElementById("filter");
const filterBtn = document.getElementById("filterBtn");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const addContactBtn = document.getElementById("addContactBtn");
const contactForm = document.getElementById("contacts");

updateContactList(contactList, contacts);

contactList.addEventListener("click", function (e) {
  const contactItem = e.target.closest(".contact-item");
  if (!contactItem) return;
  const index = Array.from(
    e.target.parentElement.parentElement.children
  ).indexOf(contactItem);
  if (e.target.classList.contains("edit-btn")) {
    editContact(contacts, index, contactItem);
    updateContactList(contactList, contacts);
  } else if (e.target.classList.contains("delete-btn")) {
    deleteContact(contacts, index);
    updateContactList(contactList, contacts);
  }
});

filterBtn.onclick = function () {
  const filterValue = filterInput.value.trim();
  const filteredContacts = filterContacts(contacts, filterValue);
  updateContactList(contactList, filteredContacts);
};

clearFilterBtn.onclick = function () {
  filterInput.value = "";
  updateContactList(contactList, contacts);
};

contactForm.onsubmit = function (e) {
  e.preventDefault();

  const name = escapeHTML(document.getElementById("name").value);
  const phone = escapeHTML(document.getElementById("phone").value);
  const terms = document.getElementById("terms").checked;

  if (!isValidName(name)) {
    showError(
      document.getElementById("name"),
      "Name should contain only letters."
    );
    return;
  }

  if (!isValidPhone(phone)) {
    showError(
      document.getElementById("phone"),
      "Phone should contain only numbers."
    );
    return;
  }

  if (!name || !phone || !terms) {
    showError(addContactBtn, "Please fill in all fields and accept the terms");
    return;
  }

  const newContact = { id: Date.now(), name, phone };
  addContact(contacts, newContact);
  updateContactList(contactList, contacts);
  contactForm.reset();
};
