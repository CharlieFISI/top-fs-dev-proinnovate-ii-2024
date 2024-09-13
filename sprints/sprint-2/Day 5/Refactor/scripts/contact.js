export { addContact } from "./Contact/addContact.js";
export { editContact } from "./Contact/editContact.js";
export { deleteContact } from "./Contact/deleteContact.js";
export { filterContacts } from "./Contact/filterContacts.js";

export function updateContactList(contactList, contacts) {
  contactList.innerHTML = "";
  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.classList.add("contact-item");
    li.setAttribute("data-id", contact.id);
    li.innerHTML = `
      <strong>${contact.name}</strong> - ${contact.phone} 
      <button class="edit-btn">Edit</button> 
      <button class="delete-btn">Delete</button>
    `;
    contactList.appendChild(li);

    const editBtn = li.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      li.innerHTML = `
        <input type="text" class="edit-name" value="${contact.name}">
        <input type="text" class="edit-phone" value="${contact.phone}">
        <button class="save-btn">Save</button>
        <button class="cancel-btn">Cancel</button>
      `;

      const saveBtn = li.querySelector(".save-btn");
      const cancelBtn = li.querySelector(".cancel-btn");

      saveBtn.addEventListener("click", () => {
        const newName = li.querySelector(".edit-name").value;
        const newPhone = li.querySelector(".edit-phone").value;
        editContact(contacts, contact.id, { name: newName, phone: newPhone });
        updateContactList(contactList, contacts);
      });

      cancelBtn.addEventListener("click", () => {
        updateContactList(contactList, contacts);
      });
    });
  });
}
