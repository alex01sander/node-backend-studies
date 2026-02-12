const { v4 } = require("uuid");

const contacts = [
    {
        id: v4(),
        name: "John Doe",
        email: "john@email.com",
        phone: "1234567890",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Jane Smith",
        email: "jane@email.com",
        phone: "0987654321",
        category_id: v4(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }
}

module.exports = new ContactsRepository();
