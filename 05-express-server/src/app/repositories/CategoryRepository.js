const db = require("../../database");

class CategoryRepository {
    async findAll(orderBy) {
        const direction =
            orderBy && orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
        const rows = await db.query(
            `SELECT * FROM categories ORDER BY name ${direction}`,
        );
        return rows;
    }
    async findById(id) {
        const row = await db.query(`SELECT * FROM categories WHERE id = $1`, [
            id,
        ]);
        return row[0];
    }

    async create({ name }) {
        const row = await db.query(
            "INSERT INTO categories (name) VALUES ($1) RETURNING *",
            [name],
        );
        return row[0];
    }

    async update(id, { name }) {
        const row = await db.query(
            "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
            [name, id],
        );
        return row[0];
    }
}
module.exports = new CategoryRepository();
