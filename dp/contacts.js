const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  // ...твой код
};

const removeContact = async (contactId) => {
  // ...твой код
};

const addContact = async (name, email, phone) => {
  // ...твой код
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
