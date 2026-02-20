const ContactsService = require("../service/ContactsService");

class ContactController {
    async index(req, res) {
        const { orderBy } = req.query;

        const contacts = await ContactsService.findAll(orderBy);
        res.json(contacts);
    }

    async show(req, res) {
        const { id } = req.params;
        const contact = await ContactsService.findContactById(id);
        return res.json(contact);
    }

    async store(req, res) {
        const { name, email, phone, category_id } = req.body;
        const contact = await ContactsService.createContact({
            name,
            email,
            phone,
            category_id,
        });
        return res.status(201).json(contact);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, email, phone, category_id } = req.body;
        const contact = await ContactsService.updateContact(id, {
            name,
            email,
            phone,
            category_id,
        });
        return res.json(contact);
    }

    async delete(req, res) {
        const { id } = req.params;
        await ContactsService.deleteContact(id);
        return res.sendStatus(204);
    }
}

module.exports = new ContactController();
