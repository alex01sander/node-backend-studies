const { v4 } = require("uuid");

const db = require("../../database");

let contacts = [
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
    async findAll() {
        const rows = await db.query(`SELECT * FROM contacts`);
        return rows;
    }

    async findById(id) {
        const row = await db.query(`SELECT * FROM contacts WHERE id = $1`, [
            id,
        ]);
        return row[0];
    }

    async findByEmail(email) {
        const row = await db.query(`SELECT * FROM contacts WHERE email = $1`, [
            email,
        ]);
        return row[0];
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }

    async create({ name, email, phone, category_id }) {
        const row = await db.query(
            `INSERT INTO contacts (name, email, phone, category_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, email, phone, category_id],
        );
        return row[0];
    }

    update(id, { name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const updateContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };
            contacts = contacts.map((contact) =>
                contact.id === id ? updateContact : contact,
            );
            resolve(updateContact);
        });
    }
}

module.exports = new ContactsRepository();
