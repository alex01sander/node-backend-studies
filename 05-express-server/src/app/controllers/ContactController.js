const ContactsRepository = require("../repositories/ContactsRepository");
class ContactController {
    async index(req, res) {
        const contacts = await ContactsRepository.findAll();
        res.json(contacts);
    }

    show() {
        // listar um registro
    }

    store() {
        // criar um registro
    }

    update() {
        // atualizar um registro
    }

    delete() {
        // deletar um registro
    }
}

module.exports = new ContactController();
