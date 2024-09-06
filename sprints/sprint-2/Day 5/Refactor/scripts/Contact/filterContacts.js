export function filterContacts(contacts, filterValue) {
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.phone.includes(filterValue)
  );
}
