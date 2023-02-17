const contacts = require("./dp/contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      console.table(await contacts.listContacts());
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "2" });
// invokeAction({
//   action: "add",
//   name: "Chaim",
//   email: "in@egetlacus.ca",
//   phone: "(294) 840-66",
// });
// invokeAction({
//   action: "remove",
//   id: "9",
// });

invokeAction(argv);
