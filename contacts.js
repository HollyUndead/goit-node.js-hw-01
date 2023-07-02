const fs = require("fs/promises")
const path = require("path")
const {nanoid} = require("nanoid")

const baseDBPath = path.resolve('db', 'contacts.json')


const listContacts = async()=> {
    const allContacts = await fs.readFile(baseDBPath, {encoding: 'utf8'})
    return(JSON.parse(allContacts))
}

const getContacById = async(id)=>{
    const allContacts = await listContacts();
    const result = allContacts.find(item => item.id === id)
    return result || null
}

const addContact = async(contact) => {
    const allContacts = await listContacts()
    const newContact = {
        id: nanoid(),
        ...contact
    }
    allContacts.push(newContact)
    await fs.writeFile(baseDBPath, JSON.stringify(allContacts, null, 2))
    return allContacts;
}

const removeContact = async(id)=>{
    const allContacts = await listContacts();
    const indexById = allContacts.findIndex((obj) => obj.id === id)
    if(indexById > -1){
        allContacts.splice(indexById, 1)
        await fs.writeFile(baseDBPath, JSON.stringify(allContacts, null, 2))
        return allContacts
    }else{
        return 'this contact isnt exist'
    }
}

module.exports = {listContacts, getContacById, addContact, removeContact};