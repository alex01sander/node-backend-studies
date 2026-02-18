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
    async findAll(orderBy) {
        const direction =
            orderBy && orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
        const rows = await db.query(
            `SELECT * FROM contacts ORDER BY name ${direction}`,
        );
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

    async create({ name, email, phone, category_id }) {
        const row = await db.query(
            `INSERT INTO contacts (name, email, phone, category_id) VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, email, phone, category_id],
        );
        return row[0];
    }

    async update(id, { name, email, phone, category_id }) {
        const row = await db.query(
            `UPDATE contacts SET name = $1, email = $2, phone = $3, category_id = $4 WHERE id = $5 RETURNING *`,
            [name, email, phone, category_id, id],
        );
        return row[0];
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactsRepository();
