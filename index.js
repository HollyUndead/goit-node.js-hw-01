const argv = require('yargs').argv
const ab = require("./contacts.js");

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action){
        case "list":
            const allContacts = await ab.listContacts();
            console.table(allContacts);
            break;
        case "get":
            const contactById = await ab.getContacById(id);
            console.table(contactById);
            break;
        case "add":
            const newListAdd = await ab.addContact({name, email, phone})
            console.table(newListAdd);
            break;
        case 'remove': 
            const newListDelet = await ab.removeContact(id)
            console.table(newListDelet);
            break;
        default:
            console.warn('Unknown action type!');
    }
}

invokeAction(argv)