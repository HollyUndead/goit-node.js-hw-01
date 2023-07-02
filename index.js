const argv = require('yargs').argv
const ab = require("./contacts.js");

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action){
        case "list":
            const allContacts = await ab.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const contactById = await ab.getContacById(id);
            console.log(contactById);
            break;
        case "add":
            const newListAdd = await ab.addContact({name, email, phone})
            console.log(newListAdd);
            break;
        case 'remove': 
            const newListDelet = await ab.removeContact(id)
            console.log(newListDelet);
            break;
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv)