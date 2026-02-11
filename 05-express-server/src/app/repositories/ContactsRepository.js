const { uuid } = require("uuidv4");

const contacts = [
    {
        id: uuid(),
        name: "John Doe",
        email: "john@email.com",
        phone: "1234567890",
        category_id: uuid(),
    },
    {
        id: uuid(),
        name: "Jane Smith",
        email: "jane@email.com",
        phone: "0987654321",
        category_id: uuid(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }
}

module.exports = new ContactsRepository();
