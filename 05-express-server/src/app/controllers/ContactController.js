class ContactController {
    index(req, res) {
        // listar todos os registros
        res.send("Listando todos os contatos");
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
